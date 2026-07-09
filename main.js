// Mobile menu
const h = document.getElementById('hamburger');
const m = document.getElementById('mobileMenu');
if (h && m) h.addEventListener('click', () => m.classList.toggle('open'));

// Sticky shadow
window.addEventListener('scroll', () => {
  const hdr = document.querySelector('.header');
  if (hdr) hdr.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.06)';
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-question').forEach(b => { b.classList.remove('open'); b.nextElementSibling.classList.remove('open'); });
    if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
  });
});
