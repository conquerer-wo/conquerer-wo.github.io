// First observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else { entry.target.classList.remove('show');}
  });
}, { threshold: 0 });

const elements = document.querySelectorAll('.animate');
elements.forEach(element => observer.observe(element));

// Second observer (defined before use)
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('na');
    }
  });
}, { threshold: 0.15});

const nav = document.querySelectorAll('.nav');
nav.forEach(element => observer1.observe(element));
