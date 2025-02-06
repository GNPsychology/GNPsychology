
// Hover effect for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.backgroundColor = '#444';
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.backgroundColor = '';
    });
  });
  