const openMenu = document.getElementById('openMenu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
});

// Add an event listener to the login button
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.navbar-links li:last-child a');
    if (loginButton) {
        loginButton.addEventListener('click', handleLoginButtonClick);
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        var faqContainers = document.querySelectorAll(".faq");

        faqContainers.forEach(function(container) {
            var question = container.querySelector(".faq-question");
            var answer = container.querySelector(".faq-answer");
            var showButton = container.querySelector(".faq-show");

            showButton.addEventListener("click", function() {
                if (answer.style.display === "none" || answer.style.display === "") {
                    answer.style.display = "block";
                    showButton.textContent = "Hide";
                } else {
                    answer.style.display = "none";
                    showButton.textContent = "Show";
                }
            });
        });
    });





