document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu toggle for mobile
  const menuBtn = document.querySelector('.menu-btn');
  const desktopNav = document.querySelector('.desktop-nav');
  menuBtn?.addEventListener('click', function () {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    desktopNav.style.display = expanded ? 'none' : 'flex';
  });

  // Search input focus on search button click
  document.querySelectorAll('.search-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = document.querySelector('.desktop-search input');
      if (input) input.focus();
    });
  });

  // Dropdown navigation for section-nav (optional enhancement)
  document.querySelectorAll('.section-nav > li').forEach((li, idx) => {
    li.addEventListener('mouseenter', () => {
      const next = li.nextElementSibling;
      if (next && next.classList.contains('Men')) {
        next.style.display = 'block';
      }
    });
    li.addEventListener('mouseleave', () => {
      const next = li.nextElementSibling;
      if (next && next.classList.contains('Men')) {
        next.style.display = 'none';
      }
    });
  });
  document.querySelectorAll('.Men').forEach(menu => {
    menu.addEventListener('mouseenter', () => {
      menu.style.display = 'block';
    });
    menu.addEventListener('mouseleave', () => {
      menu.style.display = 'none';
    });
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}