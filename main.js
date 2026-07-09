// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        contactForm.reset();
        if (formSuccess) {
          formSuccess.style.display = 'block';
        }
        btn.textContent = 'SUBMIT CONTACT REQUEST';
        btn.disabled = false;
      } else {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
      }
    } catch {
      // Fallback: redirect to mailto
      window.location.href = 'mailto:inblinkofficial@gmail.com?subject=New Project Inquiry';
      btn.textContent = 'SUBMIT CONTACT REQUEST';
      btn.disabled = false;
    }
  });
}

// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.1)'
      : '0 2px 12px rgba(0,0,0,0.06)';
  }
});
