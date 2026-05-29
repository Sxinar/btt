// ================= DISCOURSE CSS DEĞİŞKENLERİ MOTORU =================
const themes = {
  oled: `
    :root, html {
      --primary: #ffffff !important; --secondary: #000000 !important;
      --tertiary: #00b0ff !important; --quaternary: #ff6d00 !important;
      --header_background: #000000 !important; --header_primary: #ffffff !important;
      --highlight: #00e5ff !important; --success: #00e676 !important;
      --love: #ff1744 !important; --d-selected: #111111 !important; --d-hover: #222222 !important;
      --inline-code-bg: #111111 !important; --hljs-bg: #050505 !important;
    }
  `,
  catppuccin: `
    :root, html {
      --primary: #cdd6f4 !important; --secondary: #1e1e2e !important;
      --tertiary: #74c7ec !important; --quaternary: #fe640b !important;
      --header_background: #181825 !important; --header_primary: #cdd6f4 !important;
      --highlight: #fab387 !important; --success: #a6e3a1 !important;
      --love: #f5c2e7 !important; --d-selected: #313244 !important; --d-hover: #45475a !important;
      --inline-code-bg: rgba(30, 30, 46, 0.5) !important; --hljs-bg: #11111b !important;
    }
  `,
  dracula: `
    :root, html {
      --primary: #f8f8f2 !important; --secondary: #282a36 !important;
      --tertiary: #bd93f9 !important; --quaternary: #ffb86c !important;
      --header_background: #1e1f29 !important; --header_primary: #f8f8f2 !important;
      --highlight: #ff79c6 !important; --success: #50fa7b !important;
      --love: #ff5555 !important; --d-selected: #343746 !important; --d-hover: #44475a !important;
      --inline-code-bg: rgba(40, 42, 54, 0.5) !important; --hljs-bg: #1e1f29 !important;
    }
  `,
  nord: `
    :root, html {
      --primary: #d8dee9 !important; --secondary: #2e3440 !important;
      --tertiary: #88c0d0 !important; --quaternary: #b48ead !important;
      --header_background: #242933 !important; --header_primary: #e5e9f0 !important;
      --highlight: #81a1c1 !important; --success: #a3be8c !important;
      --love: #bf616a !important; --d-selected: #3b4252 !important; --d-hover: #434c5e !important;
      --inline-code-bg: rgba(46, 52, 64, 0.5) !important; --hljs-bg: #242933 !important;
    }
  `,
  tokyonight: `
    :root, html {
      --primary: #a9b1d6 !important; --secondary: #1a1b26 !important;
      --tertiary: #74aa2f7 !important; --quaternary: #ff9e64 !important;
      --header_background: #16161e !important; --header_primary: #a9b1d6 !important;
      --highlight: #bb9af7 !important; --success: #9ece6a !important;
      --love: #f7768e !important; --d-selected: #24283b !important; --d-hover: #343b58 !important;
      --inline-code-bg: rgba(26, 27, 38, 0.5) !important; --hljs-bg: #16161e !important;
    }
  `,
  gruvbox: `
    :root, html {
      --primary: #ebdbb2 !important; --secondary: #282828 !important;
      --tertiary: #fabbd2f !important; --quaternary: #fe8019 !important;
      --header_background: #1d2021 !important; --header_primary: #ebdbb2 !important;
      --highlight: #8ec07c !important; --success: #b8bb26 !important;
      --love: #fb4934 !important; --d-selected: #3c3836 !important; --d-hover: #504945 !important;
      --inline-code-bg: rgba(40, 40, 40, 0.5) !important; --hljs-bg: #1d2021 !important;
    }
  `,
  oneDark: `
    :root, html {
      --primary: #abb2bf !important; --secondary: #282c34 !important;
      --tertiary: #61afef !important; --quaternary: #d19a66 !important;
      --header_background: #21252b !important; --header_primary: #abb2bf !important;
      --highlight: #c678dd !important; --success: #98c379 !important;
      --love: #e06c75 !important; --d-selected: #2c313c !important; --d-hover: #3e4451 !important;
      --inline-code-bg: rgba(40, 44, 52, 0.5) !important; --hljs-bg: #21252b !important;
    }
  `,
  cyberpunk: `
    :root, html {
      --primary: #00f0ff !important; --secondary: #000000 !important;
      --tertiary: #f3e600 !important; --quaternary: #ff0055 !important;
      --header_background: #f3e600 !important; --header_primary: #000000 !important;
      --highlight: #ff0055 !important; --success: #00ff66 !important;
      --love: #ff0055 !important; --d-selected: #1a1a1a !important; --d-hover: #2b2b2b !important;
      --inline-code-bg: #111 !important; --hljs-bg: #000 !important;
    }
  `,
  monokai: `
    :root, html {
      --primary: #f8f8f2 !important; --secondary: #272822 !important;
      --tertiary: #a6e22e !important; --quaternary: #fd971f !important;
      --header_background: #191919 !important; --header_primary: #f8f8f2 !important;
      --highlight: #f92672 !important; --success: #a6e22e !important;
      --love: #f92672 !important; --d-selected: #3e3d32 !important; --d-hover: #49483e !important;
      --inline-code-bg: #1e1f1c !important; --hljs-bg: #191919 !important;
    }
  `,
  matrix: `
    :root, html {
      --primary: #00ff00 !important; --secondary: #000000 !important;
      --tertiary: #00ff00 !important; --quaternary: #003300 !important;
      --header_background: #051105 !important; --header_primary: #00ff00 !important;
      --highlight: #00ff00 !important; --success: #00ff00 !important;
      --love: #00aa00 !important; --d-selected: #0a220a !important; --d-hover: #0f330f !important;
      --inline-code-bg: #000 !important; --hljs-bg: #051105 !important;
    }
  `,
  solarizedDark: `
    :root, html {
      --primary: #839496 !important; --secondary: #002b36 !important;
      --tertiary: #2aa198 !important; --quaternary: #cb4b16 !important;
      --header_background: #073642 !important; --header_primary: #93a1a1 !important;
      --highlight: #b58900 !important; --success: #859900 !important;
      --love: #dc322f !important; --d-selected: #073642 !important; --d-hover: #586e75 !important;
      --inline-code-bg: #073642 !important; --hljs-bg: #002b36 !important;
    }
  `
};

function applyTheme(themeName) {
  let styleEl = document.getElementById('btt-custom-theme');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'btt-custom-theme';
    document.head.appendChild(styleEl);
  }
  
  // DÜZELTME 1: innerHTML yerine textContent kullanıldı (Güvenli yöntem)
  if (themes[themeName]) {
    styleEl.textContent = `
      ${themes[themeName]}
      body { background-color: var(--secondary) !important; color: var(--primary) !important; }
      .d-header { background-color: var(--header_background) !important; border-bottom: 1px solid var(--d-selected) !important; }
      div.cooked pre code, code { background-color: var(--hljs-bg) !important; color: var(--highlight) !important; }
      html, body, .boxed-layout, #main-outlet, .d-header, .chat-drawer, .chat-channel, .chat-composer { background-color: var(--secondary) !important; }
    `;
  } else {
    styleEl.textContent = '';
  }
}

if (typeof browser !== 'undefined') {
  browser.storage.local.get('selectedTheme').then((res) => {
    if (res.selectedTheme) applyTheme(res.selectedTheme);
  });
  browser.runtime.onMessage.addListener((request) => {
    if (request.action === "changeTheme") applyTheme(request.theme);
  });
}

// ================= SAĞ ÜST BİLDİRİM SİSTEMİ =================
function showSuccessNotification(message) {
  const oldNotify = document.getElementById('btt-addon-notify');
  if (oldNotify) oldNotify.remove();
  const notify = document.createElement('div');
  notify.id = 'btt-addon-notify';
  notify.innerText = message;
  Object.assign(notify.style, {
    position: 'fixed', top: '24px', right: '24px', backgroundColor: '#2ecc71',
    color: '#fff', padding: '14px 28px', borderRadius: '8px', zIndex: '999999',
    fontFamily: 'system-ui, sans-serif', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(notify);
  setTimeout(() => notify.remove(), 2500);
}

// ================= EKRANA SADECE BİR KERE YAZILACAK ARKA PLAN CSS KURALLARI =================
const globalStyle = document.createElement('style');
// DÜZELTME 2: innerHTML yerine textContent kullanıldı (Güvenli yöntem)
globalStyle.textContent = `
  /* Chat mesaj satırlarını buton konumlandırması için ayarla */
  .chat-message-left-side, .chat-message, .chat-message-container { position: relative !important; }
  
  /* Alıntıla butonunun tekil ve kararlı CSS tasarımı */
  .btt-chat-quote-btn {
    position: absolute; right: 10px; bottom: 4px;
    background-color: var(--tertiary, #00bcd4) !important;
    color: var(--secondary, #fff) !important;
    border: none !important; border-radius: 4px !important;
    padding: 2px 8px !important; font-size: 11px !important;
    cursor: pointer !important; zIndex: 99 !important; font-weight: bold !important;
    opacity: 0; transition: opacity 0.15s ease-in-out; pointer-events: none;
  }
  
  /* Sadece fareyle üzerine gelinen mesaja ait butonu göster */
  .chat-message-left-side:hover .btt-chat-quote-btn, 
  .chat-message-container:hover .btt-chat-quote-btn,
  .chat-message:hover .btt-chat-quote-btn {
    opacity: 1; pointer-events: auto;
  }
`;
document.head.appendChild(globalStyle);

// ================= FORUM MESAJI ALINTILAMA =================
document.addEventListener('click', function (event) {
  const replyButton = event.target.closest('.post-action-menu__reply, .reply, .btn-icon[title*="yanıtla"]');
  if (replyButton) {
    const postArticle = replyButton.closest('article, .topic-post');
    if (!postArticle) return;
    
    const username = postArticle.querySelector('.username a, .name a')?.textContent.trim() || 'anonim';
    const postId = postArticle.getAttribute('id')?.replace(/[^0-9]/g, '') || null;
    const textToQuote = postArticle.querySelector('.cooked, .post-body')?.innerText.trim() || '';
    
    let quoteMarkdown = `[quote="${username}, post:${postId}"]\n${textToQuote}\n[/quote]\n\n`;

    let attempts = 0;
    const checkEditorInterval = setInterval(() => {
      const replyTextArea = document.querySelector('.d-editor-input, textarea.reply-area');
      attempts++;
      if (replyTextArea) {
        clearInterval(checkEditorInterval);
        replyTextArea.value = quoteMarkdown + replyTextArea.value;
        replyTextArea.dispatchEvent(new Event('input', { bubbles: true }));
        replyTextArea.focus();
        showSuccessNotification("Metin başarıyla alıntılandı! 🚀");
      }
      if (attempts > 50) clearInterval(checkEditorInterval);
    }, 40);
  }
}, true);

// ================= TEKİL VE GÜVENLİ SOHBET ALINTI MOTORU =================
const chatObserver = new MutationObserver(() => {
  const chatMessages = document.querySelectorAll('.chat-message-left-side, .chat-message-container, .chat-message');
  
  chatMessages.forEach(msg => {
    if (!msg.querySelector('.btt-chat-quote-btn')) {
      const quoteBtn = document.createElement('button');
      quoteBtn.innerText = "💬 Alıntıla";
      quoteBtn.className = "btt-chat-quote-btn";
      
      quoteBtn.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        
        const username = msg.querySelector('.chat-user-name, .username, .name, [class*="user"]')?.textContent.trim() || 'Sohbet Sakini';
        const chatText = msg.querySelector('.chat-message-text, .cooked, .text, [class*="text"]')?.innerText.trim() || '';
        
        const chatQuote = `> **@${username} dedi ki:**\n> ${chatText.replace(/\n/g, '\n> ')}\n\n`;
        
        let chatInput = document.querySelector('.chat-composer-row textarea, .chat-composer-input, .d-editor-input, textarea[class*="chat"]');
        
        if (!chatInput) {
          const openBtn = document.querySelector('.chat-channel-row, .toggle-chat-btn');
          if (openBtn) openBtn.click();
        }

        let chatAttempts = 0;
        const waitForChatInput = setInterval(() => {
          chatInput = document.querySelector('.chat-composer-row textarea, .chat-composer-input, .d-editor-input, textarea[class*="chat"]');
          chatAttempts++;

          if (chatInput) {
            clearInterval(waitForChatInput);
            chatInput.value = chatQuote + chatInput.value;
            chatInput.dispatchEvent(new Event('input', { bubbles: true }));
            chatInput.focus();
            chatInput.setSelectionRange(chatInput.value.length, chatInput.value.length);
            showSuccessNotification("Sohbet mesajı otomatik alıntılandı! 💬");
          }

          if (chatAttempts > 25) {
            clearInterval(waitForChatInput);
            const globalInput = document.querySelector('.d-editor-input');
            if (globalInput) {
              globalInput.value = chatQuote + globalInput.value;
              globalInput.dispatchEvent(new Event('input', { bubbles: true }));
              globalInput.focus();
              showSuccessNotification("Sohbet mesajı ana editöre aktarıldı! 💬");
            }
          }
        }, 40);
      });
      
      msg.appendChild(quoteBtn);
    }
  });
});

chatObserver.observe(document.body, { childList: true, subtree: true });
