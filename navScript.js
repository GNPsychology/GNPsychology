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