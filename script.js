document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Thank you for contacting us, we will get back to you soon!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Thank you for contacting us, we will get back to you soon!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }
});


function toggleMenu() {
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  // Toggle sidebar visibility and prevent body scrolling
  sidebar.classList.toggle('active');
  overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
  body.classList.toggle('sidebar-open', sidebar.classList.contains('active'));
}

// Close sidebar when clicking outside of the sidebar or the menu button
document.getElementById('overlay').addEventListener('click', closeSidebar);

// Close sidebar function
function closeSidebar() {
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  sidebar.classList.remove('active');
  overlay.style.display = 'none';
  body.classList.remove('sidebar-open');
}
