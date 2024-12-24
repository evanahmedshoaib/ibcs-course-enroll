// Wait for the page to fully load before triggering animations
window.onload = () => {
    animateForm();
    animateIcons();
};

// Form animation: Fade-in and slide-up
function animateForm() {
    const formCard = document.getElementById('formCard');
    formCard.classList.add('fadeInUp');
}

// Icon animation: Slide in from the right
function animateIcons() {
    const verticalIcons = document.getElementById('verticalIcons');
    verticalIcons.classList.add('slideInRight');
}