// Dieses Skript lädt den Inhalt der sidebar.html und fügt ihn in den Platzhalter ein.
document.addEventListener("DOMContentLoaded", function() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Lädt den Inhalt der sidebar.html
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
            
            // NEUER TEIL: Hebt den aktuellen Menüpunkt hervor
            highlightCurrentPage();
        });
});

function highlightCurrentPage() {
    // Holt den Dateinamen der aktuellen Seite (z.B. "portraitzeichnungen.html")
    const currentPage = window.location.pathname.split("/").pop();
    
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
