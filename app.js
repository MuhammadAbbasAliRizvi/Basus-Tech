// script.js
(function() {
  "use strict";

  // Sticky navbar transition
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
      }
    });
  });

  // Intersection Observer for fade-in sections
  const fadeElements = document.querySelectorAll('.section-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10px 0px' });

  fadeElements.forEach(el => observer.observe(el));

  // Ensure hero and other sections visible after load (if already in view)
  window.addEventListener('load', () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        el.classList.add('visible');
      }
    });
  });

  // Floating animation already in CSS. 
  // Additional subtle parallax? not required.
})();