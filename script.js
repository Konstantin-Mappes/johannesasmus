// Dieses Skript lädt den Inhalt der sidebar.html und fügt ihn in den Platzhalter ein.
document.addEventListener("DOMContentLoaded", function() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});
