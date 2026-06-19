class FolderManager {
  constructor() {
    this.colors = [
      '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
      '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
    ];
    this.icons = ['📁', '⭐', '💼', '🎯', '📚', '🔖', '🎨', '💡'];
  }

  renderFolderList(folders) {
    const container = document.getElementById('folders-container');
    container.innerHTML = '';

    Object.entries(folders).forEach(([folderId, metadata]) => {
      const folderDiv = document.createElement('div');
      folderDiv.className = 'folder-item';
      folderDiv.style.borderLeft = `4px solid ${metadata.color}`;
      
      folderDiv.innerHTML = `
        <div class="folder-header">
          <span class="folder-icon">${metadata.icon}</span>
          <span class="folder-name">${metadata.name || 'Unnamed'}</span>
          <button class="folder-edit" data-id="${folderId}">Edit</button>
        </div>
        ${metadata.description ? `<p class="folder-desc">${metadata.description}</p>` : ''}
        <div class="folder-meta">
          Updated: ${new Date(metadata.updatedAt).toLocaleDateString()}
        </div>
      `;

      container.appendChild(folderDiv);
    });
  }

  showFolderEditor(folderId, metadata) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Edit Folder</h2>
        <label>
          Name:
          <input type="text" id="folder-name" value="${metadata.name || ''}">
        </label>
        <label>
          Description:
          <textarea id="folder-desc">${metadata.description || ''}</textarea>
        </label>
        <label>
          Color:
          <div class="color-picker">
            ${this.colors.map(c => `
              <div class="color-option" 
                   style="background: ${c}" 
                   data-color="${c}"
                   ${c === metadata.color ? 'data-selected="true"' : ''}>
              </div>
            `).join('')}
          </div>
        </label>
        <label>
          Icon:
          <div class="icon-picker">
            ${this.icons.map(i => `
              <span class="icon-option" 
                    data-icon="${i}"
                    ${i === metadata.icon ? 'data-selected="true"' : ''}>
                ${i}
              </span>
            `).join('')}
          </div>
        </label>
        <div class="modal-actions">
          <button id="save-folder">Save</button>
          <button id="cancel-folder">Cancel</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }
}

const folderManager = new FolderManager();
