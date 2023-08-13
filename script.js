const openMenu = document.getElementById('openMenu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
});


// script.js

// Function to handle the login button click event
function handleLoginButtonClick() {
    // Redirect the user to the index.html page
    window.location.href = 'index.html';
}

// Add an event listener to the login button
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.navbar-links li:last-child a');
    if (loginButton) {
        loginButton.addEventListener('click', handleLoginButtonClick);
    }
});





