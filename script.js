
//  partie calucl



//test
// Fonction pour calculer et afficher le sous-total
function affichersubtotal() {
    const prix = parseFloat(document.getElementById('prix').textContent);
    const quantite = parseInt(document.getElementById('quantity').value);
    const subtotal = prix * quantite;

    document.querySelector('#total').textContent = subtotal.toFixed(2);
    document.querySelector('#soustotal').textContent = subtotal.toFixed(2);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quantity').addEventListener('input', affichersubtotal);
    affichersubtotal();
});



// Écouter les changements dans le champ de quantité
document.getElementById('quantity').addEventListener('input', affichersubtotal);

// Appeler la fonction au chargement de la page
window.onload = affichersubtotal;


// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    // Ajouter l'écouteur d'événements pour la quantité
    document.getElementById('quantity').addEventListener('input', affichersubtotal);

    // Appeler affichersubtotal() une première fois pour afficher le sous-total initial
    affichersubtotal();
});



// Initialisation du panier (stocké dans le localStorage)
let panier = JSON.parse(localStorage.getItem('panier')) || [];

// Fonction pour ajouter un produit au panier
function ajouterAuPanier() {
    // Récupérer les détails du produit
    let produitDetails = document.querySelector('.produit');
    let id = produitDetails.querySelector('.id').textContent;
    let nom = produitDetails.querySelector('.nom').textContent;
    let prix = parseFloat(produitDetails.querySelector('.prix').textContent);
    let quantite = parseInt(document.getElementById('quantity').value);

    // Calculer le sous-total
    let sousTotal = prix * quantite;

    // Vérifier si le produit est déjà dans le panier
    let produitExistant = panier.find(item => item.id === id);

    if (produitExistant) {
        // Mettre à jour la quantité et le sous-total si le produit existe déjà
        produitExistant.quantite += quantite;
        produitExistant.sousTotal += sousTotal;
    } else {
        // Ajouter un nouveau produit au panier
        panier.push({
            id: id,
            nom: nom,
            prix: prix,
            quantite: quantite,
            sousTotal: sousTotal
        });
    }

    // Mettre à jour le localStorage
    try {
        localStorage.setItem('panier', JSON.stringify(panier));
        console.log('Panier mis à jour dans le localStorage :', panier);
    } catch (e) {
        console.error('Erreur lors de la mise à jour du localStorage :', e);
    }

    // Mettre à jour l'affichage du sous-total
    document.getElementById('soustotal').textContent = sousTotal.toFixed(2);

    // Afficher un message de confirmation
    alert('Produit ajouté au panier !');

    // Rediriger vers la page du panier (optionnel)
    window.location.href = 'panier.html';
}

// Vérifier si le bouton existe avant d'ajouter l'écouteur d'événements
let boutonAjouter = document.getElementById('ajouter-panier');

if (boutonAjouter) {
    boutonAjouter.addEventListener('click', ajouterAuPanier);
} else {
    console.error('Le bouton "Ajouter au panier" n\'a pas été trouvé.');
}

// Fonction pour afficher le panier (à utiliser sur la page panier.html)
function afficherPanier() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    let listePanier = document.getElementById('liste-panier');
    let totalPanier = document.getElementById('total-panier');
    let total = 0;

    // Vider la liste actuelle
    if (listePanier) {
        listePanier.innerHTML = '';

        // Parcourir les produits du panier et les afficher
        panier.forEach(item => {
            let li = document.createElement('li');
            li.textContent = `${item.nom} (x${item.quantite}) - ${item.sousTotal.toFixed(2)} FCFA`;
            listePanier.appendChild(li);

            // Ajouter au total général
            total += item.sousTotal;
        });

        // Afficher le total du panier
        if (totalPanier) {
            totalPanier.textContent = total.toFixed(2);
        }
    }
}

// Appeler afficherPanier() sur la page panier.html
if (window.location.href.includes('panier.html')) {
    afficherPanier();
}