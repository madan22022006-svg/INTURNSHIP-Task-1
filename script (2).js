// SkillCraft Technology — Task 01
// Handles: scroll-triggered nav style change, mobile menu toggle,
// and marking the active page link.

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  // --- Scroll state: switch nav from transparent to solid panel ---
  const SCROLL_THRESHOLD = 24;

  const updateNavOnScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  updateNavOnScroll();
  window.addEventListener('scroll', updateNavOnScroll, { passive: true });

  // --- Mobile menu toggle ---
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu after a link is chosen
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Mark the current page's nav link as active ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('is-active');
    }
  });
});
