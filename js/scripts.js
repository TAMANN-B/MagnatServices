document.addEventListener('DOMContentLoaded', function () {
  const animateItems = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    animateItems.forEach((item) => observer.observe(item));
  } else {
    animateItems.forEach((item) => item.classList.add('in-view'));
  }

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((navItem) => navItem.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Parallax léger pour la section énergie
  const energyImg = document.querySelector('.energy-img');
  if (energyImg) {
    window.addEventListener('scroll', () => {
      const rect = energyImg.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      // calcule une translation entre -12px et 12px
      const pct = (rect.top + rect.height) / (windowH + rect.height);
      const translate = Math.round((pct - 0.5) * -24);
      energyImg.style.setProperty('--energy-translate', translate + 'px');
    }, { passive: true });
    // set initial
    window.dispatchEvent(new Event('scroll'));
  }
});
