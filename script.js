// Contact Button Event Tracking
function trackContactClick(buttonType, location) {
  console.log(`${buttonType} button clicked 🚀`);

  // ส่ง event เข้า GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_button_click",
    button_type: buttonType,
    location: location
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.step-card, .problem-item, .solution-item, .info-item');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// Header Contact Buttons
document.getElementById("lineBtn").addEventListener("click", function() {
  trackContactClick("line", "hero");
});

document.getElementById("messengerBtn").addEventListener("click", function() {
  trackContactClick("messenger", "hero");
});

document.getElementById("phoneBtn").addEventListener("click", function() {
  trackContactClick("phone", "hero");
});

// Article Contact Buttons
document.getElementById("articleLineBtn").addEventListener("click", function() {
  trackContactClick("line", "article");
});

document.getElementById("articleMessengerBtn").addEventListener("click", function() {
  trackContactClick("messenger", "article");
});

document.getElementById("articlePhoneBtn").addEventListener("click", function() {
  trackContactClick("phone", "article");
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initMobileNav();
  initSmoothScroll();
  initScrollAnimations();
});

// Force Facebook widget to re-render
window.addEventListener('load', function() {
  if (typeof FB !== 'undefined') {
    FB.XFBML.parse();
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});
