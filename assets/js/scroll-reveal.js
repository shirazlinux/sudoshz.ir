/**
 * Scroll Reveal — show elements with a soft animation when they enter the viewport.
 * Lightweight IntersectionObserver (no dependencies).
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var SELECTOR = [
    '.c-card',
    '.freedom-card',
    '.freedoms-grid > .box',
    '.content-section',
    '.examples-section',
    '.example-card',
    '.conclusion',
    '.event-location',
    '#map.event-location',
    '.comments-area',
    '.comments--disqus',
    '.home-cta-panel',
    '.latest-card',
    '.bio',
    '.content__related .c-card',
    'main .l-grid > *',
    'main .l-masonry > *',
    '.post__image--wide',
    '.main-heading',
    '.h1main'
  ].join(',');

  function init() {
    var nodes = document.querySelectorAll(SELECTOR);
    if (!nodes.length) return;

    var items = [];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.getAttribute('data-reveal') === 'off') continue;
      if (el.classList.contains('is-revealed')) continue;
      el.classList.add('reveal');
      items.push(el);
    }

    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = el.getAttribute('data-reveal-delay');
        if (delay) {
          el.style.transitionDelay = delay;
        }
        el.classList.add('is-revealed');
        io.unobserve(el);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    items.forEach(function (el, index) {
      // Stagger siblings slightly for nicer cascade
      if (!el.getAttribute('data-reveal-delay')) {
        var parent = el.parentElement;
        if (parent) {
          var siblings = parent.querySelectorAll('.reveal');
          var idx = Array.prototype.indexOf.call(siblings, el);
          if (idx > 0 && idx < 12) {
            el.style.transitionDelay = (idx * 0.06) + 's';
          }
        }
      }
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
