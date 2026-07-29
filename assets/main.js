(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-links]');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.getAttribute('data-open') !== 'true';
      menu.setAttribute('data-open', String(open));
      menuButton.setAttribute('aria-expanded', String(open));
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.setAttribute('data-open', 'false');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const tabs = [...document.querySelectorAll('[data-demo-tab]')];
  const panels = [...document.querySelectorAll('[data-demo-panel]')];

  function selectDemo(targetId) {
    tabs.forEach((tab) => {
      const selected = tab.getAttribute('aria-controls') === targetId;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== targetId; });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectDemo(tab.getAttribute('aria-controls')));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
      event.preventDefault();
      const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length];
      next.focus();
      selectDemo(next.getAttribute('aria-controls'));
    });
  });

  function safeUtmToken(value, maxLength) {
    return (value || '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, maxLength);
  }

  const query = new URLSearchParams(window.location.search);
  const campaign = safeUtmToken(query.get('utm_campaign'), 22);
  const content = safeUtmToken(query.get('utm_content'), 12);

  document.querySelectorAll('[data-telegram-start]').forEach((link) => {
    const base = /^[a-z0-9_]{1,30}$/.test(link.dataset.telegramStart || '')
      ? link.dataset.telegramStart
      : '';
    if (!base) return;
    const campaignPart = campaign ? `_c_${campaign}` : '';
    const contentPart = content ? `_x_${content}` : '';
    const token = `${base}${campaignPart}${contentPart}`.slice(0, 64);
    link.href = `https://t.me/AdPilotTop_bot?start=${token}`;

    link.addEventListener('click', () => {
      const eventName = link.dataset.event || 'telegram_cta_click';
      const detail = { event: eventName, locale: document.documentElement.lang, start: token };
      window.dispatchEvent(new CustomEvent('adpilot:conversion', { detail }));
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
    });
  });

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
