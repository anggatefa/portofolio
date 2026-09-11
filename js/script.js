// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll);

// Mobile Menu Toggle
navToggle.addEventListener('click', function () {
  this.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Active nav link on scroll
function updateActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var scrollPos = window.scrollY + 120;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('revealed');
    });
  }
}

// ==================== MODALS ====================
function initModals() {
  var modalBtns = document.querySelectorAll('[data-modal]');
  var modalOverlays = document.querySelectorAll('.modal-overlay');
  var modalCloses = document.querySelectorAll('.modal-close');

  modalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloses.forEach(function (close) {
    close.addEventListener('click', function () {
      var overlay = this.closest('.modal-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  modalOverlays.forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalOverlays.forEach(function (overlay) {
        if (overlay.classList.contains('active')) {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initModals();
  initSmoothScroll();
  handleNavbarScroll();
});
