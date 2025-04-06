document.addEventListener("DOMContentLoaded", () => {
    // Handle back button and slide-out animation
    const backButton = document.querySelector(".back-button");
    const workExperienceSection = document.getElementById("workExperienceSection");

    if (backButton && workExperienceSection) {
        backButton.addEventListener("click", () => {
            workExperienceSection.classList.add("slide-out");

            // Redirect after the slide-out animation ends
            setTimeout(() => {
                window.location.href = "profile.html";
            }, 600); // Match the duration of the slide-out animation
        });
    }

    // Get language buttons and handle click events
    const languageButtons = document.querySelectorAll(".language-btn");

    languageButtons.forEach(button => {
        button.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");

            if (lang === "english") {
                const englishImageContainer = document.getElementById("englishImageContainer");

                // Toggle the visibility of the English image
                if (englishImageContainer.style.display === "none" || englishImageContainer.style.display === "") {
                    englishImageContainer.style.display = "block"; // Show the image
                } else {
                    englishImageContainer.style.display = "none"; // Hide the image
                }
            } else if (lang === "malay") {
                const malayImageContainer = document.getElementById("malayImageContainer");

                // Toggle the visibility of the Malay image
                if (malayImageContainer.style.display === "none" || malayImageContainer.style.display === "") {
                    malayImageContainer.style.display = "block"; // Show the image
                } else {
                    malayImageContainer.style.display = "none"; // Hide the image
                }
            }
        });
    });


// Function to toggle PDF display and keep language buttons visible
function togglePdf(buttonId, iframeId, imgId, pdfPath) {
    const iframe = document.getElementById(iframeId);
    const img = document.getElementById(imgId);
    
    const pdfVisible = iframe.style.display === 'none' || iframe.style.display === '';
    iframe.style.display = pdfVisible ? 'block' : 'none';
    iframe.src = pdfVisible ? pdfPath : '';
    img.src = pdfVisible ? './assets/profile/document_open.png' : './assets/profile/document_close.png';

    // Do not hide language buttons when the PDF is opened
    // languageButtons.forEach(button => button.style.display = 'inline-block'); // No need to hide them anymore
}


    document.getElementById('muet-btn').addEventListener('click', function() {
        togglePdf('muet-btn', 'muet-pdf', 'muet-img', 'pdf/MUET_Result.pdf');
    });

    document.getElementById('cgpa-btn').addEventListener('click', function() {
        togglePdf('cgpa-btn', 'cgpa-pdf', 'cgpa-img', 'pdf/sijil_dekan.pdf');
    });

    // Function to open the modal and show the selected image
    function openLanguageImage(imageName) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        
        // Set the image source to the selected image
        modalImage.src = `./assets/profile/${imageName}`;
        
        // Display the modal
        modal.style.display = "flex";  // Changed to 'flex' to center the content
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('languageModal');
        modal.classList.remove("show"); // Remove slide-in effect
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after transition
        }, 500); // Wait for the transition duration (500ms)
    }

    // Modal close functionality
    const languageModal = document.getElementById("languageModal");
    const closeBtn = document.getElementById("closeBtn");

    // Show the modal when a language button is clicked
    languageButtons.forEach(button => {
        button.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            // Set the image source based on the clicked button
            const modalImage = document.getElementById('modalImage');
            if (lang === "english") {
                modalImage.src = "./assets/profile/english.png"; // Replace with your actual path
            } else if (lang === "malay") {
                modalImage.src = "./assets/profile/malay.png"; // Replace with your actual path
            }
            // Show the modal and trigger slide-in effect
            languageModal.classList.add("show");
            languageModal.style.display = "flex"; // Make sure it's visible
        });
    });

    // Close the modal when the close button (image) is clicked
    closeBtn.addEventListener("click", function() {
        closeModal();
    });

    // Optionally, close the modal if clicked outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === languageModal) {
            closeModal();
        }
    });

    // Hover effect on close button image
    const closeButton = document.getElementById('closeBtn');

    closeButton.addEventListener("mouseover", function() {
        closeButton.src = "./assets/profile/x2_button.png"; // Image on hover
    });

    closeButton.addEventListener("mouseout", function() {
        closeButton.src = "./assets/profile/x_button.png"; // Default image
    });
});

