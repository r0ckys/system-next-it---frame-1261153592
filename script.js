// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Animate hamburger icon
  const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
  if (mobileMenu.classList.contains('active')) {
    lines[0].style.transform = 'rotate(45deg) translateY(8px)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
  }
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
  const sectionMap = {
    services: 1621,
    saas: 3110,
    websites: 4177,
    marketing: 4995,
    tools: 5693,
    contact: 8051
  };

  const targetPosition = sectionMap[sectionId] || 0;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  
  // Close mobile menu if open
  mobileMenu.classList.remove('active');
  const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
  lines[0].style.transform = 'none';
  lines[1].style.opacity = '1';
  lines[2].style.transform = 'none';
  
  // Update active nav link
  updateActiveNavLink(sectionId);
}

// Update Active Navigation Link
function updateActiveNavLink(sectionId) {
  // Desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === sectionId) {
      link.classList.add('active');
    }
  });
  
  // Mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === sectionId) {
      link.classList.add('active');
    }
  });
}

// Navigation Links Click Handlers
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.dataset.section;
    scrollToSection(sectionId);
  });
});

// Scroll Spy - Update active nav on scroll
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      
      const sections = [
        { id: 'contact', position: 8051 },
        { id: 'tools', position: 5693 },
        { id: 'marketing', position: 4995 },
        { id: 'websites', position: 4177 },
        { id: 'saas', position: 3110 },
        { id: 'services', position: 1621 }
      ];
      
      for (const section of sections) {
        if (scrollPosition >= section.position - 100) {
          updateActiveNavLink(section.id);
          break;
        }
      }
      
      ticking = false;
    });
    ticking = true;
  }
});

// Chat Widget
const chatWidget = document.getElementById('chatWidget');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');

chatWidget.addEventListener('click', () => {
  chatModal.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
  chatModal.classList.remove('active');
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(msg => {
    msg.style.display = 'none';
  });
  document.querySelectorAll('input, textarea').forEach(input => {
    input.classList.remove('error');
  });
  
  let isValid = true;
  
  // Validate First Name
  const firstName = contactForm.firstName;
  if (!firstName.value.trim()) {
    showError(firstName, 'First name is required');
    isValid = false;
  }
  
  // Validate Last Name
  const lastName = contactForm.lastName;
  if (!lastName.value.trim()) {
    showError(lastName, 'Last name is required');
    isValid = false;
  }
  
  // Validate Email
  const email = contactForm.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, 'Email is invalid');
    isValid = false;
  }
  
  // Validate Phone
  const phone = contactForm.phone;
  if (!phone.value.trim()) {
    showError(phone, 'Phone number is required');
    isValid = false;
  }
  
  // Validate Message
  const message = contactForm.message;
  if (!message.value.trim()) {
    showError(message, 'Message is required');
    isValid = false;
  }
  
  if (isValid) {
    // Show success message
    successMessage.classList.add('show');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      contactForm.reset();
      successMessage.classList.remove('show');
    }, 3000);
  }
});

function showError(input, message) {
  input.classList.add('error');
  const errorMsg = input.parentElement.querySelector('.error-message');
  if (errorMsg) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }
}

// Add input event listeners to clear errors on typing
contactForm.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.style.display = 'none';
    }
  });
});

// Add hover effects to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('.pricing-card, .tech-card, .step-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    }
  }
});

// Close chat modal when clicking outside
document.addEventListener('click', (e) => {
  if (!chatModal.contains(e.target) && !chatWidget.contains(e.target)) {
    chatModal.classList.remove('active');
  }
});

console.log('Website loaded successfully! All interactive features are ready.');
