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
    // Holt den Dateinamen der aktuellen Seite (z.B. "portraitzeichnungen.html")
    // Der Zusatz "|| 'index.html'" sorgt dafür, dass die Startseite auch erkannt wird.
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    
    // Holt alle Links im Menü
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Geht jeden Link durch
    navLinks.forEach(link => {
        // Holt den Dateinamen, auf den der Link zeigt
        const linkPage = link.getAttribute('href');
        
        // Vergleicht die aktuelle Seite mit dem Link-Ziel
        if (currentPage === linkPage) {
            // Fügt die Klasse "active" hinzu, wenn sie übereinstimmen
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
            // NEU: Fügt dem Burger-Button eine Klasse für die X-Animation hinzu
            burger.classList.toggle('is-active');
        });

        // Schließt das Menü, wenn man auf einen Menüpunkt klickt
        sidebar.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sidebar.classList.remove('is-open');
                // NEU: Entfernt die X-Animation, wenn ein Link geklickt wird
                burger.classList.remove('is-active');
            }
        });
    }
}
