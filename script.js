/* ========================================
   SIMRAN Website — Smooth Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ========== Navbar scroll effect ==========
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Navbar shadow
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link on scroll
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ========== Mobile hamburger menu ==========
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ========== Smooth scroll for all anchor links ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== Say Hello button + Toast ==========
  const helloBtn = document.getElementById('helloBtn');
  const toast = document.getElementById('toast');

  helloBtn.addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  });

  // ========== Scroll reveal for cards ==========
  const revealElements = document.querySelectorAll(
    '.about-card, .timeline-item, .lang-card, .contact-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ========== Subtle parallax on hero image ==========
  const heroImg = document.querySelector('.main-img');
  if (heroImg) {
    window.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
    });
  }

  // ========== Console easter egg ==========
  console.log(
    '%c🌸 Hello from Simran! %c\nKeep learning, stay curious, and build beautiful things!',
    'font-size: 18px; font-weight: bold; color: #ff9ecb;',
    'font-size: 13px; color: #c9a0ff;'
  );
});
