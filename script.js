// 1. Dark and Light Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon'; // Switch icon to moon
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun'; // Switch icon to sun
    }
});

// 2. Project Details Show/Hide Logic (Dynamic Interaction)
function toggleDetails(id) {
    const detailsBox = document.getElementById(id);
    const button = detailsBox.previousElementSibling;

    if (detailsBox.classList.contains('hidden')) {
        detailsBox.classList.remove('hidden');
        button.innerText = 'Hide Details';
    } else {
        detailsBox.classList.add('hidden');
        button.innerText = 'View Details';
    }
}

// 3. Simple Dynamic Greeting based on time
window.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('.hero-content h3');
    const hours = new Date().getHours();
    let greeting = "Hello";

    if (hours < 12) greeting = "Good Morning";
    else if (hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    heroHeading.innerText = `${greeting}, I am`;
});