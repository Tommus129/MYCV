/* =============================================================
   LANGUAGE STATE — IT / EN
   Espone: currentLang, t(key), setLang(lang), applyTranslations(lang)
   Chiamato da: main.js (init) e dai pulsanti LangSwitch (onclick)
   ============================================================= */

var currentLang = (function () {
  var stored = localStorage.getItem('lang');
  return (stored === 'it' || stored === 'en') ? stored : 'it';
})();

function t(key) {
  var tr = TRANSLATIONS[currentLang];
  return (tr && tr[key] !== undefined) ? tr[key] : key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  var tr = TRANSLATIONS[lang];
  if (!tr) return;

  /* textContent */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) el.textContent = tr[key];
  });

  /* innerHTML (elements with embedded tags) */
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (tr[key] !== undefined) el.innerHTML = tr[key];
  });

  /* placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (tr[key] !== undefined) el.placeholder = tr[key];
  });

  /* CV download links — href e download cambiano con la lingua */
  document.querySelectorAll('.cv-link').forEach(function (el) {
    el.href = tr.cv_file;
    el.setAttribute('download', tr.cv_download_name);
  });

  /* lang switcher active state */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* html[lang] attribute */
  document.documentElement.lang = lang;

  /* aggiorna la griglia servizi se il modulo è già pronto */
  if (window.ServicesModule) window.ServicesModule.refresh(lang);
}
