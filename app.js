 // First observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.add('fade-out');

      // Add 'one' after 4400ms
      setTimeout(() => {
        entry.target.classList.add('one');

        // Once 'one' is added, remove 'none' 
        const heading = document.querySelector('.navg .none')
        if (entry.target.classList.contains('one')) {
          entry.target.classList.remove('animate', 'fade-out','none'); 
        if(heading && heading.classList.contains('none')) {heading.classList.remove('none');}
          
          
          entry.target.classList.add('navg');
          
          
         
           observer.unobserve(entry.target); 
        }
      }, 4400);
    }
  });
}, { threshold: 0 });

const elements = document.querySelectorAll('.animate');
elements.forEach(element => observer.observe(element));

// Second observer
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('na');
    }
  });
}, { threshold: 0.15 });

const nav = document.querySelectorAll('.nav');
nav.forEach(element => observer1.observe(element));
