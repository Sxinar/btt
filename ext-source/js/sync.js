class BookmarkSync {
  constructor() {
    this.syncKey = 'btt_bookmarks_sync';
    this.foldersKey = 'btt_folders';
  }

  async syncBookmarks() {
    const bookmarks = await chrome.bookmarks.getTree();
    const flattened = this.flattenBookmarks(bookmarks[0]);
    
    await chrome.storage.sync.set({
      [this.syncKey]: JSON.stringify({
        bookmarks: flattened,
        lastSync: new Date().toISOString(),
        version: 1
      })
    });

    return flattened;
  }

  flattenBookmarks(node, parentPath = '') {
    const items = [];
    
    if (node.url) {
      items.push({
        id: node.id,
        title: node.title,
        url: node.url,
        path: parentPath,
        dateAdded: node.dateAdded
      });
    }

    if (node.children) {
      const currentPath = parentPath ? `${parentPath}/${node.title}` : node.title;
      node.children.forEach(child => {
        items.push(...this.flattenBookmarks(child, currentPath));
      });
    }

    return items;
  }

  async getSyncedBookmarks() {
    const result = await chrome.storage.sync.get(this.syncKey);
    if (result[this.syncKey]) {
      return JSON.parse(result[this.syncKey]);
    }
    return null;
  }

  async createFolder(name, parentId) {
    const folder = await chrome.bookmarks.create({
      title: name,
      parentId: parentId
    });

    await this.saveFolderMetadata(folder.id, {
      color: '#3b82f6',
      icon: '📁',
      description: ''
    });

    return folder;
  }

  async saveFolderMetadata(folderId, metadata) {
    const folders = await this.getFolders();
    folders[folderId] = {
      ...metadata,
      updatedAt: new Date().toISOString()
    };

    await chrome.storage.local.set({
      [this.foldersKey]: JSON.stringify(folders)
    });
  }

  async getFolders() {
    const result = await chrome.storage.local.get(this.foldersKey);
    return result[this.foldersKey] ? JSON.parse(result[this.foldersKey]) : {};
  }

  async exportBookmarks() {
    const data = await this.getSyncedBookmarks();
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    
    await chrome.downloads.download({
      url: url,
      filename: `btt-bookmarks-${Date.now()}.json`,
      saveAs: true
    });
  }

  async importBookmarks(jsonData) {
    const data = JSON.parse(jsonData);
    
    for (const bookmark of data.bookmarks) {
      try {
        await chrome.bookmarks.create({
          title: bookmark.title,
          url: bookmark.url
        });
      } catch (error) {
        console.error('Failed to import bookmark:', error);
      }
    }
  }
}

const syncManager = new BookmarkSync();
