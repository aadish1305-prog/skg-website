// nav.js — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Set active nav link based on current page filename
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Clients page: sector filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const clientCards = document.querySelectorAll('.client-card-full');
  if (filterBtns.length && clientCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const sector = btn.dataset.sector;
        clientCards.forEach(function (card) {
          if (sector === 'all' || card.dataset.sector === sector) {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
