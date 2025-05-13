function toggleMenu() {
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  // Toggle sidebar visibility and prevent body scrolling
  sidebar.classList.toggle('active');
  overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
  body.classList.toggle('sidebar-open', sidebar.classList.contains('active'));
}

document.querySelectorAll('.submenu-toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');
  });
});


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


// Get the current page's URL (e.g., home.html, about.html)
const currentPage = window.location.pathname.split("/").pop(); // Extracts the filename from the URL

// Select all the anchor elements (menu links) inside the menu bar
const menuLinks = document.querySelectorAll('.nav a');

// Loop through each link in the menu
menuLinks.forEach(link => {
    // Check if the link's href (target page) matches the current page
    if (link.getAttribute('href') === currentPage) {
        // Add the 'active' class to the link that corresponds to the current page
        link.classList.add('active');
    }
});

