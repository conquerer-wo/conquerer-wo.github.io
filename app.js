const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show', 'fade-out');

      setTimeout(() => {
        // Create the replacement
        const replacement = document.createElement('div');
        replacement.className = 'replacement';
        replacement.innerHTML = `
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; gap: 90px;">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/06/FA_Euro_logo.svg" style="width: 100px; height:90px;">
            <h1>FUTURE LEGEND</h1>
            <img class="p" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/MLS_Next_logo.svg/1200px-MLS_Next_logo.svg.png" style="width: 100px; height:90px;">
          </div>
        `;

        // Replace the entire .q section
        entry.target.replaceWith(replacement);

        observer.unobserve(entry.target);
      }, 4400);
    }
  });
}, { threshold: 0 });

// Only observe the parent .q, not every .animate
const section = document.querySelector('.q');
observer.observe(section);


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
