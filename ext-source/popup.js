const themeSelect = document.getElementById('themeSelect');

// Kayıtlı temayı yükle
browser.storage.local.get('selectedTheme').then((result) => {
  if (result.selectedTheme) {
    themeSelect.value = result.selectedTheme;
  }
});

// Tema değiştiğinde kaydet ve aktif sekmeye bildir
themeSelect.addEventListener('change', (e) => {
  const theme = e.target.value;
  browser.storage.local.set({ selectedTheme: theme });

  // Aktif sekmeye temayı anında uygula
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    if (tabs[0]) {
      browser.tabs.sendMessage(tabs[0].id, { action: "changeTheme", theme: theme });
    }
  });
});
