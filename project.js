// Toggle Menu Function: Opens or closes the menu when the hamburger button is clicked.
function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuOverlay = document.getElementById("menu-overlay");

    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    // If the menu is open, disable the popup closing behavior
    if (menu.classList.contains("active")) {
        menuOverlay.setAttribute("data-target", "menu");
    } else {
        menuOverlay.removeAttribute("data-target");
    }
}

// Close Phone Number Popup: Hides the phone number popup and its associated image and overlay.
function closePopup() {
    const popup = document.getElementById("phone-popup");
    const overlay = document.getElementById("overlay");
    const phoneImage = document.querySelector(".popup-image");

    popup.style.display = "none";
    phoneImage.style.display = "none"; // Hide the phone number image
    overlay.classList.remove("show");
}

// Event listener to open Gmail popup when the Gmail button is clicked
document.querySelector(".gmail-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default mailto behavior
    openGmailPopup(); // Open the Gmail form popup directly
});

// Hover Effect for Close Button (X Button)
function hoverCloseButton(element) {
    element.src = "./assets/profile/x2_button.png"; // Change icon on hover
}

// Unhover Effect for Close Button (X Button)
function unhoverCloseButton(element) {
    element.src = "./assets/profile/x_button.png"; // Revert icon on unhover
}

// Call the function when the page loads
window.onload = function () {
    displayContentAfterDelay();  // Show main content after delay
    showFooterWithDelay();       // Show footer with delay
};

// Display Main Content with Delay (Slide-In Animation)
function displayContentAfterDelay() {
    setTimeout(() => {
        const content = document.getElementById("main-content");
        content.style.display = "block";
        content.classList.add("slide-in-content"); // Apply slide-in animation
    }, 100);
}

// Navigate to Work Experience Page with Slide-Out Animation
function navigateToWorkExperience() {
    const content = document.getElementById("main-content");
    content.classList.add("slide-out-content");

    navigateWithFooterFadeOut("work-experience.html");
}

// Navigate to a page with Menu Close Animation
function navigateWithMenuClose(targetPage) {
    const menu = document.getElementById("menu");
    menu.classList.add("menu-slide-out");

    navigateWithFooterFadeOut(targetPage);
}

// Function to open a popup by ID
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    var popupOverlay = document.getElementById('popup-overlay');
    popup.style.display = 'block'; // Show the popup
    popupOverlay.classList.add('active'); // Show the overlay
}

// Function to close a popup by ID
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    var popupOverlay = document.getElementById('popup-overlay');
    popup.style.display = 'none'; // Hide the popup
    popupOverlay.classList.remove('active'); // Hide the overlay
}

// Function to close all popups when clicking outside (for popups only)
function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    const popupOverlay = document.getElementById('popup-overlay');

    // Loop through all popups and hide them
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    popupOverlay.classList.remove('active'); // Hide the overlay
}

// Function to close the menu when clicking outside (only when the menu is open)
function closeMenuIfClickedOutside(event) {
    const menu = document.getElementById("menu");
    const menuOverlay = document.getElementById("menu-overlay");

    if (menu.classList.contains("active") && !menu.contains(event.target) && !menuOverlay.contains(event.target)) {
        menu.classList.remove("active"); // Close the menu
        menuOverlay.classList.remove("active"); // Close the overlay
    }
}

// Event listener to close menu or popups when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const popupOverlay = document.getElementById("popup-overlay");
    const popups = document.querySelectorAll('.popup');

    // If the click is outside the menu and overlay (but not the hamburger button), close the menu
    if (menu.classList.contains("active") && !menu.contains(event.target) && !menuOverlay.contains(event.target) && !event.target.closest('.hamburger')) {
        menu.classList.remove("active"); // Close the menu
        menuOverlay.classList.remove("active"); // Close the overlay
    }

    // Check if the click is outside any of the popups
    if (popupOverlay.classList.contains("active") && !Array.from(popups).some(popup => popup.contains(event.target))) {
        closeAllPopups(); // Close all popups
    }
});

// Function to close popups when clicking outside
document.addEventListener("click", function(event) {
    const popups = document.querySelectorAll('.popup');
    const overlay = document.getElementById('overlay');

    // Loop through all popups and check if the click is outside them
    popups.forEach(function(popup) {
        if (!popup.contains(event.target) && event.target !== overlay) {
            closePopup(popup.id); // Close the popup if clicked outside
        }
    });
});

