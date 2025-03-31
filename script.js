// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconBars = document.getElementById('menu-icon-bars');
  const menuIconClose = document.getElementById('menu-icon-close');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle('hidden');
      
      // Toggle between hamburger and close icons
      menuIconBars.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });
  }
  
  // Handle mobile menu link clicks (close menu when link is clicked)
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIconBars.classList.remove('hidden');
      menuIconClose.classList.add('hidden');
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      // For this demo, we'll just show an alert
      alert(`Thank you for your message, ${name}! This is a demo form.`);
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to the element
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}); 