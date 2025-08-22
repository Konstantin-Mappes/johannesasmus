document.addEventListener("DOMContentLoaded", function() {
    // Lädt den Inhalt der sidebar.html
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
            
            // Hebt den aktuellen Menüpunkt hervor
            highlightCurrentPage();

            // Fügt die Klick-Funktionen für das Burger-Menü hinzu
            setupBurgerMenu();
        });
});

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
}

// Funktion für das Burger-Menü
function setupBurgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');

    if (burger && sidebar) {
        // Öffnet/Schließt das Menü beim Klick auf den Burger
        burger.addEventListener('click', function() {
            sidebar.classList.toggle('is-open');
        });

        // Schließt das Menü, wenn man auf einen Menüpunkt klickt
        sidebar.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sidebar.classList.remove('is-open');
            }
        });
    }
}
