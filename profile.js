// Function to send email using EmailJS
function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get the form values
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    console.log('Sending email with the following params:', params); // For debugging

    // Send email using EmailJS service and template
    emailjs.send("service_2c97l9z", "template_0bpvios", params)
        .then(function(response) {
            console.log('Email sent successfully:', response); // Log success response

            // Show success message if email is sent successfully
            document.getElementById("form-message").style.display = "block";
            document.getElementById("form-error").style.display = "none"; // Hide error message
            document.getElementById("gmail-form").reset(); // Reset form inputs

            // Show the success image
            document.getElementById("success-message-container").style.display = "block";

            // Close the Gmail popup after successful email submission
            closeGmailPopup();
        }, function(error) {
            console.error('Failed to send email:', error); // Log error for debugging
            // Show error message if email sending fails
            document.getElementById("form-message").style.display = "none";
            document.getElementById("form-error").style.display = "block";
        });
}


// Open Gmail Popup Form
function openGmailPopup() {
    document.getElementById("gmail-popup").style.display = "flex"; // Show the popup
}

// Close Gmail Popup Form
function closeGmailPopup() {
    document.getElementById("gmail-popup").style.display = "none"; // Hide the popup
}

// Event listener to open Gmail popup when the user clicks the "Contact Me via Email" button
document.querySelector(".gmail-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default mailto behavior
    openGmailPopup(); // Open the Gmail form popup directly
});

// Change Bio Text
function changeBio() {
    let bio = document.getElementById("bio");
    bio.innerText = "I love coding and creating amazing websites!";
}

let flipped = false;

// Flip Profile Picture
function flipProfile() {
    const profilePic = document.querySelector(".profile-pic");
    flipped = !flipped;
    profilePic.style.transform = flipped ? "rotateY(360deg)" : "rotateY(0deg)";
}

// Show Phone Number Message Box
function showPhoneNumber() {
    const messageBox = document.getElementById("phone-message");
    const overlay = document.getElementById("overlay");

    messageBox.style.display = "block";
    overlay.style.display = "block";

    setTimeout(() => {
        messageBox.classList.add("show");
        overlay.classList.add("show");
    }, 10);
}

// Hide Phone Number Message Box
function hidePhoneNumber() {
    const messageBox = document.getElementById("phone-message");
    const overlay = document.getElementById("overlay");

    messageBox.classList.remove("show");
    overlay.classList.remove("show");

    setTimeout(() => {
        messageBox.style.display = "none";
        overlay.style.display = "none";
    }, 300);
}

// Toggle Dropdown Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.querySelector(".overlay");

    // Prevent menu from toggling if the call popup is open
    const popup = document.getElementById("phone-popup");
    if (popup.style.display === "block") return;

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

// WhatsApp Popup Confirmation
function confirmWhatsApp(event) {
    event.preventDefault(); // Prevent immediate redirection
    document.getElementById("whatsapp-popup").style.display = "block";
}

// Open WhatsApp Link
function openWhatsApp() {
    window.location.href = "https://wa.me/60193279294"; // Replace with your WhatsApp number
}

// Close WhatsApp Popup
function closeWhatsAppPopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
}

// Hover Effect for Yes Button
function hoverYesButton(element) {
    element.src = "./assets/profile/yes2.png";
}

// Unhover Effect for Yes Button
function unhoverYesButton(element) {
    element.src = "./assets/profile/yes.png";
}

// Call Popup for Phone Number
function confirmCall(event) {
    event.preventDefault(); // Prevent unintended actions

    const popup = document.getElementById("phone-popup");
    const overlay = document.getElementById("overlay");
    const phoneImage = document.querySelector(".popup-image");

    if (popup.style.display === "block") return;

    popup.style.display = "block";
    phoneImage.style.display = "block"; // Show phone_number.png
    overlay.classList.add("show");
}

// Close Phone Number Popup
function closePopup() {
    const popup = document.getElementById("phone-popup");
    const overlay = document.getElementById("overlay");
    const phoneImage = document.querySelector(".popup-image");

    popup.style.display = "none";
    phoneImage.style.display = "none"; // Hide phone_number.png
    overlay.classList.remove("show");
}

// Hover Effect for Close Button
function hoverCloseButton(element) {
    element.src = "./assets/profile/x2_button.png";
}

// Unhover Effect for Close Button
function unhoverCloseButton(element) {
    element.src = "./assets/profile/x_button.png";
}

// Call the function when the page loads
window.onload = function () {
    displayContentAfterDelay();

};

// Display Main Content with Delay (Slide-In Animation)
function displayContentAfterDelay() {
    setTimeout(() => {
        const content = document.getElementById("main-content");
        content.style.display = "block";
        content.classList.add("slide-in-content");
    }, 100); // Display after delay
}

// Navigate to Work Experience Page
function navigateToWorkExperience() {
    const content = document.getElementById("main-content");
    content.classList.add("slide-out-content");

    navigateWithFooterFadeOut("work-experience.html");
}

// Navigate with Menu Close Animation
function navigateWithMenuClose(targetPage) {
    const menu = document.getElementById("menu");
    menu.classList.add("menu-slide-out");

    navigateWithFooterFadeOut(targetPage);
}

// Hover effect for No Button (WhatsApp)
function hoverNoButton(element) {
    element.src = "./assets/profile/no2.png";
}

// Revert Hover Effect for No Button (WhatsApp)
function unhoverNoButton(element) {
    element.src = "./assets/profile/no.png";
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');
    
    // Display the popup and overlay
    popup.style.display = 'block';
    overlay.classList.add('active'); // Adds dark overlay
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    const overlay = document.getElementById('overlay');
    
    // Hide all popups and the overlay
    popups.forEach(popup => popup.style.display = 'none');
    overlay.classList.remove('active'); // Removes the dark overlay
}

// Close Success Message Image
function closeSuccessMessage() {
    document.getElementById("success-message-container").style.display = "none"; // Hide the success message
}

