// Fonction pour basculer l'affichage d'un élément
function toggleElement(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Fonctions pour ouvrir/fermer les menus
function toggleclic() {
    toggleElement('puceone');
}

function toggleclic2() {
    toggleElement('puceone2');
}

// Fermer les menus en cliquant à l'extérieur
document.addEventListener('click', function(event) {
    let puceone = document.getElementById('puceone');
    let puceone2 = document.getElementById('puceone2');
    let clic = document.querySelector('.clic');
    let clic2 = document.querySelector('.clic2');

    // Fermer puceone si le clic est en dehors
    if (!puceone.contains(event.target) && !clic.contains(event.target)) {
        puceone.style.display = 'none';
    }

    // Fermer puceone2 si le clic est en dehors
    if (!puceone2.contains(event.target) && !clic2.contains(event.target)) {
        puceone2.style.display = 'none';
    }
});

// Empêcher la propagation du clic sur les menus eux-mêmes
document.getElementById('puceone').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('puceone2').addEventListener('click', function(event) {
    event.stopPropagation();
});