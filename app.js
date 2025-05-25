// First observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show', 'fade-out');

      setTimeout(() => {
        entry.target.classList.add('one');

        if (entry.target.classList.contains('one')) {
          entry.target.classList.remove('fade-out');

          // Create a replacement element
          const replacement = document.createElement('div');
          replacement.className = 'replacement';
          replacement.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; gap: 90px;">
              <img src="https://upload.wikimedia.org/wikipedia/en/0/06/FA_Euro_logo.svg" style="width: 100px;">
              <h1>FUTURE LEGEND</h1>
              <img style="margin-left:90px" class="p" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/MLS_Next_logo.svg/1200px-MLS_Next_logo.svg.png" style="width: 100px;">
            </div>
          `;

          // Replace the old .animate element with the new replacement
          entry.target.replaceWith(replacement);

          // Now select the element with class "p" inside the replacement and apply style
        

          observer.unobserve(entry.target);
        }
      }, 4400);
    }
  });
}, { threshold: 0 });

// Observe all .animate elements
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

// Observe all .nav elements
const nav = document.querySelectorAll('.nav');
nav.forEach(element => observer1.observe(element));
