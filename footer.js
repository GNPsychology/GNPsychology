
// Hover effect for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.backgroundColor = 'rgba(113, 150, 216, 0.774)';
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.backgroundColor = '';
    });
  });
  