// Small helpers for amfrench.com – menu, "Show More" text, fade-ins, footer year.
(function () {
  // Phone/tablet menu button
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // "Show More" / "Show Less" on the Friends in Need animals
  document.querySelectorAll('.show-more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.closest('.animal-text');
      var open = box.classList.toggle('open');
      btn.textContent = open ? 'Show Less' : 'Show More';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Fade things in as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Keep the copyright year current
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
