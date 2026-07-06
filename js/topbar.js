document.addEventListener('DOMContentLoaded', function () {
  let lastScrollY = window.scrollY;
  const topbar = document.querySelector('.topbar');
  const header = document.querySelector('header');

  if (!topbar || !header) return;

  window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      topbar.classList.add('topbar-hidden');
      header.classList.add('topbar-hidden');
    } else if (currentScrollY < lastScrollY) {
      topbar.classList.remove('topbar-hidden');
      header.classList.remove('topbar-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
});
