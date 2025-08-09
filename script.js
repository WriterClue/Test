// Sticky header shrink on scroll
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.contact-card');
  const trigger = document.getElementById('header-trigger');

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        header.classList.remove('shrink');
      } else {
        header.classList.add('shrink');
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(trigger);
});

// Loader & animation logic
window.addEventListener('load', () => {
  setTimeout(() => {
    // Remove loader
    const loader = document.getElementById('loader-wrapper');
    if (loader) loader.remove();

    // === SHOW CONTACT CARD NOW ===
    const contactCard = document.querySelector('.contact-card.hide-before-load');
    if (contactCard) contactCard.classList.remove('hide-before-load');

    // Animate header
    const popElements = document.querySelectorAll('.pop-once');
    popElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 200);
    });

    // Show background
    const bg = document.querySelector('.background-image');
    if (bg) bg.classList.add('visible');

    // Scroll observer for pop-up animation
    const scrollElements = document.querySelectorAll('.observe-pop');
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    scrollElements.forEach((el) => scrollObserver.observe(el));
  }, 3000); // Loader timeout
});