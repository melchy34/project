// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for header height
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle active class to show/hide menu
    });
}

// Form validation (for example, admission form)
document.querySelector('form').addEventListener('submit', function (e) {
    let isValid = true;
    const formFields = this.querySelectorAll('input[required], select[required], textarea[required]');
    
    formFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red'; // Highlight missing fields
            alert(`Please fill out the ${field.name} field.`);
        } else {
            field.style.borderColor = ''; // Reset border color
        }
    });
    
    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Example function to handle dynamic content changes (you can expand this)
function changeContent(contentId, newContent) {
    const contentElement = document.getElementById(contentId);
    if (contentElement) {
        contentElement.innerHTML = newContent;
    }
}
