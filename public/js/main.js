(function () {
  'use strict';

  var EMAIL = 'ddaiya24@yonsei.ac.kr';
  var SECTION_IDS = ['home', 'about', 'projects', 'contact'];

  var header = document.querySelector('.site-header');
  var navLinks = document.querySelectorAll('.top-nav a[data-nav], .bottom-nav a[data-nav]');
  var sections = SECTION_IDS.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. 메뉴 클릭 시 해당 영역으로 부드럽게 이동 ---------- */
  function scrollToSection(id) {
    var target = document.getElementById(id);
    if (!target) return;

    var offset = header ? header.offsetHeight : 0;
    var top = id === 'home'
      ? 0
      : target.getBoundingClientRect().top + window.pageYOffset - offset - 8;

    window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#' + id);
    setActive(id);
  }

  document.querySelectorAll('a[data-nav]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (!hash || hash.charAt(0) !== '#') return;
      e.preventDefault();
      scrollToSection(hash.slice(1));
    });
  });

  /* 현재 보고 있는 영역에 맞춰 메뉴 활성 상태 표시 */
  function setActive(id) {
    navLinks.forEach(function (link) {
      var isMatch = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isMatch);
      if (isMatch) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActiveOnScroll() {
    var marker = window.innerHeight * 0.35;
    var current = SECTION_IDS[0];

    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= marker) current = sec.id;
    });

    // 페이지 끝에 도달하면 마지막 영역(Contact)을 활성화
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4) {
      current = SECTION_IDS[SECTION_IDS.length - 1];
    }
    setActive(current);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveOnScroll();
      ticking = false;
    });
  }, { passive: true });

  // 주소에 #about 등이 포함된 채로 열었을 때 해당 위치로 이동
  window.addEventListener('load', function () {
    var initial = location.hash.slice(1);
    if (SECTION_IDS.indexOf(initial) > -1 && initial !== 'home') scrollToSection(initial);
    updateActiveOnScroll();
  });
  updateActiveOnScroll();

  /* ---------- 2. 프로젝트 카드 캐러셀 인디케이터 (모바일) ---------- */
  var carousel = document.getElementById('project-carousel');
  var dotsWrap = document.getElementById('carousel-dots');

  if (carousel && dotsWrap) {
    var cards = carousel.querySelectorAll('.project-card');

    cards.forEach(function (card, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.tabIndex = -1;
      dot.addEventListener('click', function () {
        carousel.scrollTo({
          left: card.offsetLeft - carousel.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2,
          behavior: reduceMotion ? 'auto' : 'smooth'
        });
      });
      if (i === 0) dot.classList.add('is-active');
      dotsWrap.appendChild(dot);
    });

    var dots = dotsWrap.querySelectorAll('button');
    carousel.addEventListener('scroll', function () {
      var center = carousel.scrollLeft + carousel.clientWidth / 2;
      var closest = 0;
      var minDist = Infinity;
      cards.forEach(function (card, i) {
        var cardCenter = card.offsetLeft - carousel.offsetLeft + card.offsetWidth / 2;
        var dist = Math.abs(cardCenter - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === closest); });
    }, { passive: true });
  }

  /* ---------- 3. 이메일 주소 복사 + 토스트 ---------- */
  // (이메일 링크 클릭 시 메일 작성창은 mailto: 링크로 열립니다)
  var copyBtn = document.getElementById('copy-email-btn');
  var toast = document.getElementById('copy-toast');
  var toastTimer;

  function showToast() {
    if (!toast) return;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
  }

  function fallbackCopy(text) {
    var temp = document.createElement('textarea');
    temp.value = text;
    temp.setAttribute('readonly', '');
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    try { document.execCommand('copy'); } catch (err) { /* 무시 */ }
    document.body.removeChild(temp);
    showToast();
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(EMAIL).then(showToast, function () { fallbackCopy(EMAIL); });
      } else {
        fallbackCopy(EMAIL);
      }
    });
  }

  /* ---------- 기타 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
