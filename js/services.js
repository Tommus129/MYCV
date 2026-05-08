(function () {
  var TYPES = [
    { key: 'vetrina',  label: 'Sito Vetrina' },
    { key: 'webapp',   label: 'Web App' },
    { key: 'ecommerce',label: 'E-commerce' },
    { key: 'mobile',   label: 'App Mobile' }
  ];

  var filters = { sector: null, type: null };
  var sectors = [];

  /* ── helpers ── */
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatPrice(min, max) {
    return '€ ' + min.toLocaleString('it-IT') +
           ' – € ' + max.toLocaleString('it-IT');
  }

  function scrollToContact() {
    var target = document.getElementById('contact');
    if (!target) return;
    var y = target.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  /* ── filter logic ── */
  function getFiltered() {
    return PROJECTS.filter(function (p) {
      if (filters.sector && p.sector !== filters.sector) return false;
      if (filters.type   && p.type   !== filters.type)   return false;
      return true;
    });
  }

  /* ── card rendering ── */
  function makeCard(p, idx) {
    var card = document.createElement('article');
    card.className = 'service-card';
    card.style.animationDelay = Math.min(idx * 45, 450) + 'ms';

    /* feature tags */
    var featureTags = p.features.map(function (f) {
      return '<span class="sc-feature-tag">' + escHtml(f) + '</span>';
    }).join('');

    var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    card.innerHTML =
      '<div class="sc-top">' +
        '<span class="sc-type-badge">' + escHtml(p.typeLabel) + '</span>' +
      '</div>' +
      '<div class="sc-body">' +
        '<h3 class="sc-title">' + escHtml(p.title) + '</h3>' +
        '<p class="sc-sub">' + escHtml(p.sub) + ' &middot; <span class="sc-sector">' + escHtml(p.sector) + '</span></p>' +
        '<p class="sc-desc">' + escHtml(p.description) + '</p>' +
        '<div class="sc-features">' + featureTags + '</div>' +
      '</div>' +
      '<div class="sc-footer">' +
        '<button class="btn btn-ghost sc-cta">' +
          'Richiedi un progetto simile ' + arrowSvg +
        '</button>' +
      '</div>';

    /* prefill contact on CTA click */
    card.querySelector('.sc-cta').addEventListener('click', function () {
      var subjectEl = document.getElementById('subject');
      var messageEl = document.getElementById('message');
      if (subjectEl) {
        subjectEl.value = 'Richiesta progetto simile a ' + p.title + ' — ' + p.sub;
      }
      if (messageEl) {
        messageEl.value = 'Ciao, sono interessato a un progetto simile a “' + p.title +
          '” per il settore ' + p.sector + '. Vorrei ricevere un preventivo gratuito.';
      }
      scrollToContact();
      setTimeout(function () {
        var nameEl = document.getElementById('name');
        if (nameEl) nameEl.focus();
      }, 700);
    });

    /* mouse-tracking glow (mirrors .project cards in main.js) */
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100) + '%');
    });

    /* custom cursor hover */
    if (document.body.classList.contains('has-cursor')) {
      var ring = document.getElementById('cursorRing');
      card.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
      card.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
    }

    return card;
  }

  /* ── grid render ── */
  function renderGrid() {
    var grid    = document.getElementById('servicesGrid');
    var emptyEl = document.getElementById('servicesEmpty');
    var countEl = document.getElementById('filterCount');
    var filtered = getFiltered();

    /* clear */
    while (grid.firstChild) grid.removeChild(grid.firstChild);

    filtered.forEach(function (p, i) { grid.appendChild(makeCard(p, i)); });

    if (filtered.length === 0) {
      emptyEl.style.display = 'flex';
      grid.style.display    = 'none';
    } else {
      emptyEl.style.display = 'none';
      grid.style.display    = 'grid';
    }

    countEl.textContent = filtered.length +
      (filtered.length === 1 ? ' progetto trovato' : ' progetti trovati');
  }

  /* ── chip builder ── */
  function buildChips(containerId, items, filterKey) {
    var container = document.getElementById(containerId);
    items.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className   = 'filter-chip';
      btn.textContent = item.label;
      btn.dataset.key = item.key;
      btn.addEventListener('click', function () {
        var isActive = filters[filterKey] === item.key;
        container.querySelectorAll('.filter-chip').forEach(function (c) {
          c.classList.remove('active');
        });
        filters[filterKey] = isActive ? null : item.key;
        if (!isActive) btn.classList.add('active');
        renderGrid();
      });
      container.appendChild(btn);
    });
  }

  /* ── reset ── */
  function resetAll() {
    filters = { sector: null, type: null };
    document.querySelectorAll('.filter-chip').forEach(function (c) {
      c.classList.remove('active');
    });
    renderGrid();
  }

  /* ── init ── */
  function init() {
    /* collect unique sectors in first-appearance order, then sort */
    var seen = {};
    PROJECTS.forEach(function (p) {
      if (!seen[p.sector]) { seen[p.sector] = true; sectors.push(p.sector); }
    });
    sectors.sort();

    buildChips('filterSector', sectors.map(function (s) { return { key: s, label: s }; }), 'sector');
    buildChips('filterType',   TYPES,   'type');

    document.getElementById('filterReset').addEventListener('click',  resetAll);
    document.getElementById('filterReset2').addEventListener('click', resetAll);

    renderGrid();
  }

  init();
})();
