// JavaScript code for interactivity

document.addEventListener('DOMContentLoaded', function() {
    loadPage('home'); // Load the home page by default
});

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            mainContent.innerHTML = '<p>Sorry, the page could not be loaded.</p>';
        });
}
