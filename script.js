(function() {
  emailjs.init("rwlCu_0d2ffxX1cdk"); // Replace with your EmailJS User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile=document.getElementById("mobile")
    const message = document.getElementById("message").value;
    const time=Date.now();
    const templateParams = {
    name: name,
    email: email,
    time:time,
    mobile:mobile,
    message: message
    };
    emailjs.send("service_046owpg", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      console.log("SUCCESS!", response);
      document.getElementById("formMessage").innerText = "Thank you for contacting us, we will get back to you soon!";
      document.getElementById("formMessage").style.color = "green";
      document.getElementById("contactForm").reset(); // Clear the form
    }, function(error) {
      console.log("FAILED...", error);
      document.getElementById("formMessage").innerText = "Oops! Something went wrong.";
      document.getElementById("formMessage").style.color = "red";
    });

    /**if (name && email &&mobile&& message) {
        document.getElementById("formMessage").textContent = "Thank you for contacting us, we will get back to you soon!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }**/
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

