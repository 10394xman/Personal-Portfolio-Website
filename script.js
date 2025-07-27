// DOM Elements

const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const themeToggle = document.querySelector('#checkbox');
const themeIcon = document.querySelector('#theme-icon i');

const contactForm = document.getElementById('contactForm');
const yearEl = document.getElementById('current-year');

// Typing effect words
const textArray = ['Full Stack Web Developer', 'MERN Stack Developer'];
let textArrayIndex = 0;
let charIndex = 0;

// Function for typing effect
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 2000);
  }
}

// Function for erasing effect
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1500);
  }
};

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', function() {
  if (textArray.length) {
    setTimeout(type, 1000);
  }
});

// Dark mode toggle
function setTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  }
};

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeToggle.checked = true;
  setTheme(true);
};

// Theme switch event listener
themeToggle.addEventListener('change', function() {
  setTheme(this.checked);
});

// Form submission handler
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();  //prevents default behaviour of form, such as refreshing the page on submission
    // Get the name value from the form
    const name = this.elements['name']
    // Reset the form     //form's built in reset method    
    this.reset();        
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
  });
}

// Set current year in footer
yearEl.textContent = new Date().getFullYear();
