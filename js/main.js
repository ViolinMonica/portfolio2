/* Small bits of behaviour. Nothing here is required for the page to read
   correctly — it degrades to a plain scrolling document without JS. */

(function () {
  'use strict';

  /* ---- mobile menu ------------------------------------------------------ */
  var burger = document.getElementById('navBurger');
  var links = document.getElementById('navLinks');

  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });

    // close after tapping a link
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- highlight the nav item you're looking at ------------------------- */
  var sections = document.querySelectorAll('main section[id]');
  var navItems = document.querySelectorAll('.nav__links > a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navItems.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- reveal blocks as they enter the viewport ------------------------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.section__body, .hero__meta');

  if (!reduced && 'IntersectionObserver' in window) {
    targets.forEach(function (el) { el.classList.add('reveal'); });

    var shower = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) { shower.observe(el); });
  }

  /* ---- footer year ----------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

})();
