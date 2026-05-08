(function () {
  var TYPES = [
    { key: 'vetrina',   labelKey: 'type_vetrina' },
    { key: 'webapp',    labelKey: 'type_webapp' },
    { key: 'ecommerce', labelKey: 'type_ecommerce' },
    { key: 'mobile',    labelKey: 'type_mobile' }
  ];

  var filters = { sector: null, type: null };
  var sortedSectors = []; /* settori in ordine alfabetico (chiavi IT) */

  /* ── helpers ── */
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function formatPrice(min, max) {
    return '€ ' + min.toLocaleString('it-IT') +
           ' – € ' + max.toLocaleString('it-IT');
  }

  function getLang() {
    return (typeof currentLang !== 'undefined') ? currentLang : 'it';
  }

  function tr(key) {
    return (typeof t === 'function') ? t(key) : key;
  }

  /* Ritorna la label del settore per la lingua corrente */
  function sectorLabel(itKey, lang) {
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].sector.it === itKey) {
        return PROJECTS[i].sector[lang] || itKey;
      }
    }
    return itKey;
  }

  function scrollToContact() {
    var target = document.getElementById('contact');
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' });
  }

  /* ── filter logic ── */
  function getFiltered() {
    return PROJECTS.filter(function (p) {
      if (filters.sector && p.sector.it !== filters.sector) return false;
      if (filters.type   && p.type   !== filters.type)     return false;
      return true;
    });
  }

  /* ── card rendering ── */
  function makeCard(p, idx) {
    var lang = getLang();
    var card = document.createElement('article');
    card.className = 'service-card';
    card.style.animationDelay = Math.min(idx * 45, 450) + 'ms';

    var featureTags = p.features[lang].map(function (f) {
      return '<span class="sc-feature-tag">' + escHtml(f) + '</span>';
    }).join('');

    var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    card.innerHTML =
      '<div class="sc-top">' +
        '<span class="sc-type-badge">' + escHtml(p.typeLabel[lang]) + '</span>' +
      '</div>' +
      '<div class="sc-body">' +
        '<h3 class="sc-title">' + escHtml(p.title) + '</h3>' +
        '<p class="sc-sub">' + escHtml(p.sub[lang]) + ' &middot; <span class="sc-sector">' + escHtml(p.sector[lang]) + '</span></p>' +
        '<p class="sc-desc">' + escHtml(p.description[lang]) + '</p>' +
        '<div class="sc-features">' + featureTags + '</div>' +
      '</div>' +
      '<div class="sc-footer">' +
        '<button class="btn btn-ghost sc-cta">' +
          escHtml(tr('card_cta')) + ' ' + arrowSvg +
        '</button>' +
      '</div>';

    card.querySelector('.sc-cta').addEventListener('click', function () {
      var subjectEl = document.getElementById('subject');
      var messageEl = document.getElementById('message');
      var subjectTpl = tr('card_inquiry_subject')
        .replace('{title}',  p.title)
        .replace('{sub}',    p.sub[lang]);
      var messageTpl = tr('card_inquiry_message')
        .replace('{title}',  p.title)
        .replace('{sector}', p.sector[lang]);
      if (subjectEl) subjectEl.value = subjectTpl;
      if (messageEl) messageEl.value = messageTpl;
      scrollToContact();
      setTimeout(function () {
        var nameEl = document.getElementById('name');
        if (nameEl) nameEl.focus();
      }, 700);
    });

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100) + '%');
    });

    if (document.body.classList.contains('has-cursor')) {
      var ring = document.getElementById('cursorRing');
      card.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
      card.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
    }

    return card;
  }

  /* ── grid render ── */
  function renderGrid() {
    var grid     = document.getElementById('servicesGrid');
    var emptyEl  = document.getElementById('servicesEmpty');
    var countEl  = document.getElementById('filterCount');
    var filtered = getFiltered();

    while (grid.firstChild) grid.removeChild(grid.firstChild);
    filtered.forEach(function (p, i) { grid.appendChild(makeCard(p, i)); });

    if (filtered.length === 0) {
      emptyEl.style.display = 'flex';
      grid.style.display    = 'none';
    } else {
      emptyEl.style.display = 'none';
      grid.style.display    = 'grid';
    }

    countEl.textContent = filtered.length + ' ' +
      tr(filtered.length === 1 ? 'projects_found_one' : 'projects_found_many');
  }

  /* ── update chip labels without rebuilding (preserves active state) ── */
  function updateChipLabels(lang) {
    document.querySelectorAll('#filterSector .filter-chip').forEach(function (chip) {
      chip.textContent = sectorLabel(chip.dataset.key, lang);
    });
    document.querySelectorAll('#filterType .filter-chip').forEach(function (chip) {
      var labelKey = 'type_' + chip.dataset.key;
      chip.textContent = TRANSLATIONS[lang][labelKey] || chip.dataset.key;
    });
    /* empty-state paragraph */
    var emptyP = document.querySelector('#servicesEmpty p');
    if (emptyP) emptyP.textContent = tr('services_empty');
  }

  /* ── chip builder ── */
  function buildChips(containerId, items, filterKey) {
    var lang = getLang();
    var container = document.getElementById(containerId);
    items.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className    = 'filter-chip';
      btn.dataset.key  = item.key;
      btn.textContent  = item.label(lang);
      btn.addEventListener('click', function () {
        var isActive = filters[filterKey] === item.key;
        container.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
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
    document.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
    renderGrid();
  }

  /* ── init ── */
  function init() {
    var seen = {};
    PROJECTS.forEach(function (p) {
      if (!seen[p.sector.it]) { seen[p.sector.it] = true; sortedSectors.push(p.sector.it); }
    });
    sortedSectors.sort();

    buildChips('filterSector', sortedSectors.map(function (itKey) {
      return { key: itKey, label: function (lang) { return sectorLabel(itKey, lang); } };
    }), 'sector');

    buildChips('filterType', TYPES.map(function (tp) {
      return { key: tp.key, label: function (lang) { return TRANSLATIONS[lang][tp.labelKey] || tp.key; } };
    }), 'type');

    document.getElementById('filterReset').addEventListener('click',  resetAll);
    document.getElementById('filterReset2').addEventListener('click', resetAll);

    renderGrid();
  }

  init();

  /* ── exposed API — chiamato da applyTranslations() in lang.js ── */
  window.ServicesModule = {
    refresh: function (lang) {
      updateChipLabels(lang);
      renderGrid();
    }
  };

})();
