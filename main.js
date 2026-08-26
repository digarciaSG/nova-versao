/* Sitio Riacho Doce - interacoes */
(function () {
  'use strict';

  /* Navbar com fundo ao rolar */
  var nav = document.getElementById('navbar');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  if (nav) {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Menu mobile acessivel */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('navMenu');
  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.classList.remove('active');
    menu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.classList.toggle('active');
      menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* Animacao de entrada ao rolar */
  var targets = document.querySelectorAll('.feature-card, .plan-card, .amenidade, .dist-item');
  if ('IntersectionObserver' in window && targets.length > 0) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    Array.prototype.forEach.call(targets, function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      io.observe(el);
    });
  }

  /* Ano dinamico no rodape */
  var ano = document.getElementById('ano-atual');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();