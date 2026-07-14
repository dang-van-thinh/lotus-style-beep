/* ════════════════════════════════════
   FLOATING BUTTONS — shown on every page:
   1) Messenger chat bubble, bottom-right, user can drag it
      anywhere on screen; position is remembered (localStorage).
   2) Back-to-top button, fixed position, only appears after
      scrolling down. Sits above the Messenger button's default
      spot so the two never overlap on load.
════════════════════════════════════ */

(function () {
  // Replace with your real Messenger deep link, e.g.
  // 'https://m.me/your-page-username'
  var MESSENGER_LINK = '#';

  var DRAG_THRESHOLD = 6; // px of movement before a press counts as a drag
  var STORAGE_KEY = 'lotusMessengerFabPos';

  function el(html) {
    var wrap = document.createElement('div');
    wrap.innerHTML = html.trim();
    return wrap.firstChild;
  }

  /* ── Back to top ── */
  var topBtn = el(
    '<button type="button" class="floating-btn back-to-top-btn" aria-label="Back to top">' +
      '<svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15V5M5 9l5-5 5 5"/></svg>' +
    '</button>'
  );
  document.body.appendChild(topBtn);

  function syncTopBtn() {
    topBtn.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', syncTopBtn, { passive: true });
  syncTopBtn();

  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Messenger (draggable) ── */
  var msgBtn = el(
    '<a href="' + MESSENGER_LINK + '" target="_blank" rel="noopener" draggable="false" ' +
      'class="floating-btn messenger-btn" aria-label="Chat on Messenger">' +
      '<svg width="28" height="28" viewBox="0 0 36 36" fill="none">' +
        '<path fill="#fff" d="M18 0C7.85 0 0 7.4 0 17.4c0 5.63 2.55 10.66 6.73 13.95a1 1 0 01.35.76l.07 2.33a1 1 0 001.4.88l2.6-1.15a1 1 0 01.7-.03c1.94.54 4.02.82 6.15.82 10.15 0 18-7.4 18-17.4S28.15 0 18 0z"/>' +
        '<path fill="#006AFF" d="M8.3 22.8l5.3-8.4a1.5 1.5 0 012.16-.4l4.2 3.15a1.2 1.2 0 001.44-.02l5.7-4.33c.76-.58 1.72.35 1.2 1.15l-5.3 8.4a1.5 1.5 0 01-2.16.4l-4.2-3.15a1.2 1.2 0 00-1.44.02l-5.7 4.33c-.76.58-1.72-.35-1.2-1.15z"/>' +
      '</svg>' +
    '</a>'
  );
  document.body.appendChild(msgBtn);

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function applyPosition(x, y) {
    var w = msgBtn.offsetWidth;
    var h = msgBtn.offsetHeight;
    var maxX = window.innerWidth - w - 8;
    var maxY = window.innerHeight - h - 8;
    x = clamp(x, 8, Math.max(8, maxX));
    y = clamp(y, 8, Math.max(8, maxY));
    msgBtn.style.left = x + 'px';
    msgBtn.style.top = y + 'px';
    msgBtn.style.right = 'auto';
    msgBtn.style.bottom = 'auto';
    return { x: x, y: y };
  }

  function savePosition(x, y) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ x: x, y: y })); } catch (e) {}
  }

  function restorePosition() {
    var raw;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
    if (!raw) return;
    try {
      var pos = JSON.parse(raw);
      if (typeof pos.x === 'number' && typeof pos.y === 'number') applyPosition(pos.x, pos.y);
    } catch (e) {}
  }

  // Restore after layout has a real size to clamp against.
  window.addEventListener('load', restorePosition);
  if (document.readyState === 'complete') restorePosition();

  // Keep it on-screen if the window is resized/rotated.
  window.addEventListener('resize', function () {
    var rect = msgBtn.getBoundingClientRect();
    if (msgBtn.style.left) {
      var pos = applyPosition(rect.left, rect.top);
      savePosition(pos.x, pos.y);
    }
  });

  // Belt-and-suspenders: links/images can start a native OS/browser drag
  // (dragging a link out to create a bookmark, etc.) which hijacks the
  // mouse gesture before our own pointermove logic ever sees it. This is
  // what broke dragging with a real mouse on desktop.
  msgBtn.addEventListener('dragstart', function (e) { e.preventDefault(); });

  var dragState = null;

  msgBtn.addEventListener('pointerdown', function (e) {
    if (e.button !== undefined && e.button !== 0) return; // left click / touch only
    e.preventDefault(); // stop native drag/text-selection from starting
    var rect = msgBtn.getBoundingClientRect();
    dragState = {
      startX: e.clientX,
      startY: e.clientY,
      originLeft: rect.left,
      originTop: rect.top,
      moved: false,
    };
    msgBtn.setPointerCapture(e.pointerId);
  });

  msgBtn.addEventListener('pointermove', function (e) {
    if (!dragState) return;
    var dx = e.clientX - dragState.startX;
    var dy = e.clientY - dragState.startY;
    if (!dragState.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      dragState.moved = true;
      msgBtn.classList.add('dragging');
    }
    if (dragState.moved) {
      applyPosition(dragState.originLeft + dx, dragState.originTop + dy);
    }
  });

  function endDrag(e) {
    if (!dragState) return;
    var wasDrag = dragState.moved;
    if (wasDrag) {
      var rect = msgBtn.getBoundingClientRect();
      var pos = applyPosition(rect.left, rect.top);
      savePosition(pos.x, pos.y);
      msgBtn.classList.remove('dragging');
    }
    dragState = null;
    // Suppress the click-triggered navigation that follows a real drag.
    if (wasDrag) {
      msgBtn._suppressClick = true;
      setTimeout(function () { msgBtn._suppressClick = false; }, 0);
    }
  }

  msgBtn.addEventListener('pointerup', endDrag);
  msgBtn.addEventListener('pointercancel', endDrag);

  msgBtn.addEventListener('click', function (e) {
    if (msgBtn._suppressClick) e.preventDefault();
  });
})();
