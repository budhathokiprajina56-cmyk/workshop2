// MENU TOGGLE
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');

    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

// Close menu after clicking a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) toggleMenu();
    });
});

// FORM VALIDATION
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameVal = document.getElementById('name').value.trim();
    const emailVal = document.getElementById('email').value.trim();
    const msgVal = document.getElementById('message').value.trim();

    if (nameVal === "" || emailVal === "" || msgVal === "") {
        messageDiv.textContent = "Please fill out all fields!";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Thank you! Your message has been sent.";
        messageDiv.style.color = "lightgreen";
        contactForm.reset();
    }
});