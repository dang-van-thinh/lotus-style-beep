/* ════════════════════════════════════
   LAYOUT — renders the shared header and
   footer from js/site-data.js into the
   #header-placeholder / #footer-placeholder
   mount points. Runs synchronously (no
   defer) so header/footer exist before
   js/main.js (deferred) looks for them.
════════════════════════════════════ */

(function () {
  var DATA = window.SITE_DATA;
  var page = document.body.dataset.page || '';

  function findNav(id) {
    for (var i = 0; i < DATA.nav.length; i++) {
      if (DATA.nav[i].id === id) return DATA.nav[i];
    }
    return null;
  }

  function renderLogo() {
    var href = page === 'home' ? '#' : 'index.html';
    return '<a href="' + href + '" class="flex items-center gap-2.5 shrink-0">' +
      '<img src="' + DATA.brand.logo + '" alt="' + DATA.brand.name + '" class="h-[3.5rem] w-auto" />' +
      '<span class="font-display font-bold text-[26px] tracking-wide text-gray-900">' + DATA.brand.name + '</span>' +
      '<span class="font-display font-bold text-[13px] tracking-wide text-gray-700">' + DATA.brand.mini_name + '</span>' +
      '</a>';
  }

  function renderCTA(desktop) {
    var active = page === 'order';
    var base = desktop
      ? 'btn-primary text-sm font-semibold px-5 py-2.5 rounded-xl'
      : 'btn-primary text-sm font-semibold px-4 py-3 rounded-xl text-center';
    var cls = active ? base + ' is-active' : base;
    var style = active ? ' style="background:#E08500"' : '';
    return '<a href="' + DATA.cta.href + '" class="' + cls + '"' + style + '>' + DATA.cta.label + '</a>';
  }

  function renderDropdownItems(item, forMobile) {
    return item.dropdown.map(function (d) {
      if (page === 'services') {
        var closeNav = forMobile ? 'document.getElementById(\'mobile-nav\').classList.remove(\'open\');' : '';
        var href = forMobile ? '#' + d.id : 'services.html#' + d.id;
        return '<a ' + (forMobile ? '' : 'class="nav-dropdown-item" ') +
          'href="' + href + '" onclick="switchService(\'' + d.id + '\');' + closeNav + 'return false;"' +
          (forMobile ? ' class="text-sm text-gray-600"' : '') + '>' +
          (forMobile ? '' : '<span class="nav-dropdown-dot"></span>') + d.label + '</a>';
      }
      return '<a ' + (forMobile ? '' : 'class="nav-dropdown-item" ') +
        'href="services.html#' + d.id + '"' + (forMobile ? ' class="text-sm text-gray-600"' : '') + '>' +
        (forMobile ? '' : '<span class="nav-dropdown-dot"></span>') + d.label + '</a>';
    }).join('');
  }

  function renderDesktopNav() {
    return DATA.nav.map(function (item) {
      var active = item.id === page;
      if (item.dropdown) {
        var arrow = '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>';
        var linkClass = active
          ? 'nav-link is-active text-sm font-semibold flex items-center gap-1 transition-colors'
          : 'nav-link text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1';
        var linkStyle = active ? ' style="color:var(--orange)"' : '';
        return '<div class="nav-has-dropdown">' +
          '<a href="' + item.href + '" class="' + linkClass + '"' + linkStyle + '>' + item.label + arrow + '</a>' +
          '<div class="nav-dropdown-menu">' + renderDropdownItems(item, false) + '</div>' +
          '</div>';
      }
      var cls = active
        ? 'nav-link is-active text-sm font-medium transition-colors'
        : 'nav-link text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors';
      var style = active ? ' style="color:var(--orange)"' : '';
      return '<a href="' + item.href + '" class="' + cls + '"' + style + '>' + item.label + '</a>';
    }).join('');
  }

  function renderMobileNav() {
    var parts = DATA.nav.map(function (item) {
      if (item.dropdown) {
        if (page === 'services') {
          return '<div class="text-sm font-semibold" style="color:var(--orange)">' + item.label + '</div>' +
            '<div class="pl-4 flex flex-col gap-3 border-l-2" style="border-color:var(--orange)">' +
            renderDropdownItems(item, true) + '</div>';
        }
        return '<a href="' + item.href + '" class="text-sm font-medium text-gray-700">' + item.label + '</a>';
      }
      var active = item.id === page;
      var cls = active ? 'text-sm font-semibold' : 'text-sm font-medium text-gray-700';
      var style = active ? ' style="color:var(--orange)"' : '';
      return '<a href="' + item.href + '" class="' + cls + '"' + style + '>' + item.label + '</a>';
    });
    parts.push(renderCTA(false));
    return parts.join('');
  }

  window.renderHeader = function () {
    var mount = document.getElementById('header-placeholder');
    if (!mount) return;
    mount.outerHTML =
      '<header id="site-header" class="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">' +
        '<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">' +
          renderLogo() +
          '<nav class="hidden md:flex items-center gap-8">' + renderDesktopNav() + renderCTA(true) + '</nav>' +
          '<button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" ' +
            'onclick="document.getElementById(\'mobile-nav\').classList.toggle(\'open\')" aria-label="Toggle menu">' +
            '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h16M3 12h16M3 18h16"/></svg>' +
          '</button>' +
        '</div>' +
        '<div id="mobile-nav" class="md:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-4">' +
          renderMobileNav() +
        '</div>' +
      '</header>';
  };

  var SOCIAL_ICONS = {
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.91c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>',
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    whatsapp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z"/><path d="M20.52 3.48A11.94 11.94 0 0012.02 0C5.4 0 .04 5.36.04 12c0 2.11.55 4.16 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0012.02 24C18.64 24 24 18.64 24 12c0-3.2-1.25-6.21-3.48-8.52zM12.02 21.94c-1.85 0-3.66-.5-5.24-1.44l-.38-.22-3.67.96.98-3.58-.24-.37A9.9 9.9 0 012.1 12c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.93-9.93 9.93z"/></svg>',
  };

  function renderSocialLinks(social) {
    if (!social || !social.length) return '';
    return '<div class="flex items-center gap-2.5 mt-5">' +
      social.map(function (s) {
        return '<a href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.name + '" class="footer-social-link">' +
          (SOCIAL_ICONS[s.icon] || '') + '</a>';
      }).join('') +
      '</div>';
  }

  window.renderFooter = function (extraClass) {
    var mount = document.getElementById('footer-placeholder');
    if (!mount) return;
    var f = DATA.footer;
    var servicesItem = findNav('services');
    var serviceLinks = servicesItem.dropdown.map(function (d) {
      if (page === 'services') {
        return '<li><a href="services.html#' + d.id + '" onclick="switchService(\'' + d.id + '\');return false;" ' +
          'class="hover:text-white transition-colors">' + d.label + '</a></li>';
      }
      return '<li><a href="services.html#' + d.id + '" class="hover:text-white transition-colors">' + d.label + '</a></li>';
    }).join('');
    var legalLinks = f.legalLinks.map(function (l) {
      return '<a href="' + l.href + '" class="hover:text-white transition-colors">' + l.label + '</a>';
    }).join('');
    var cls = 'bg-gray-900 text-gray-400 py-16 px-6' + (extraClass ? ' ' + extraClass : '');
    mount.outerHTML =
      '<footer class="' + cls + '">' +
        '<div class="max-w-7xl mx-auto">' +
          '<div class="grid md:grid-cols-4 gap-10 mb-12">' +
            '<div class="md:col-span-2">' +
              '<div class="flex items-center gap-2.5 mb-4"><img src="' + DATA.brand.logo + '" alt="' + DATA.brand.name + '" class="h-8 w-auto brightness-0 invert" /></div>' +
              '<p class="text-sm leading-relaxed max-w-xs">' + f.tagline + '</p>' +
              renderSocialLinks(f.social) +
            '</div>' +
            '<div>' +
              '<p class="text-white font-semibold text-sm mb-4">Services</p>' +
              '<ul class="space-y-2.5 text-sm">' + serviceLinks + '</ul>' +
            '</div>' +
            '<div>' +
              '<p class="text-white font-semibold text-sm mb-4">Get In Touch</p>' +
              '<p class="text-sm mb-1">' + f.email + '</p>' +
              '<p class="text-sm mb-5">' + f.supportHours + '</p>' +
              '<form id="footer-form" onsubmit="handleFooterForm(event)" class="flex gap-2">' +
                '<input type="email" placeholder="Your email" required class="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors" />' +
                '<button type="submit" id="footer-btn" class="btn-primary text-sm font-semibold px-4 py-2.5 rounded-lg shrink-0">Send</button>' +
              '</form>' +
            '</div>' +
          '</div>' +
          '<div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">' +
            '<span>' + f.copyright + '</span>' +
            '<div class="flex gap-6">' + legalLinks + '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  };

  window.renderHeader();
})();
