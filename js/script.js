// Small progressive enhancement script
document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      // Toggle nav visibility for small screens
      if (!expanded) {
        nav.style.display = 'block';
      } else {
        nav.style.display = '';
      }
    });
  }

  // Basic client-side form handling (optional)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // If using Formspree or similar, default submit is fine.
      // Could add client validation or show a "sending..." message here.
    });
  }
});