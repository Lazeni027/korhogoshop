// Liste des produits
const produits = [
    { id: 1, nom: 'KariteIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a1.jpg" },
    { id: 2, nom: 'KariteIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a2.jpg" },
    { id: 3, nom: 'KariteIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a3.jpg" },
    { id: 4, nom: 'KariteIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a4.jpg" },
    { id: 5, nom: 'KariteIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a5.jpg" },
    { id: 6, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/a6.jpg" },
    { id: 7, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b1.jpg" },
    { id: 8, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b2.jpg" },
    { id: 9, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b3.jpg" },
    { id: 10, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b4.jpg" },
    { id: 11, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b5.jpg" },
    { id: 12, nom: 'PagneWIDF.MariamD1',  description: 'Beure de karité 100% pur, Traitement naturel, filtrer et 100% Bio, Beurre local du Poro; Ingreien Le beurre de karité est composé principalement d#acides gras, de vitamines et de composants naturels. Les acides gras incluent l#acide oléique (40-60 %), qui hydrate et nourrit la peau, l#acide stéarique (20-50 %), qui stabilise la texture du beurre, l#acide linoléique (3-11 %), qui renforce la barrière cutanée, et l#acide palmitique (2-9 %), qui contribue à la texture onctueuse. Il contient également de la vitamine E, un antioxydant protégeant la peau, et de la vitamine A, qui favorise la régénération cellulaire. Parmi les composants naturels, on trouve l#allantoïne, qui apaise et répare la peau, les phytostérols, qui améliorent l#élasticité, les polyphénols, qui protègent des UV, et les triglycérides, qui hydratent et nourrissent. Le latex naturel est éliminé lors de la purification, et l#eau est présente en faible quantité, car le beurre de karité est anhydre.', prix: '2000', url:"./images/b6.jpg" },
];

// Fonction pour obtenir les paramètres de l'URL
function getParametreUrl(nom) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nom);
}

// Récupère l'identifiant du produit depuis l'URL
const produitId = parseInt(getParametreUrl('id'));

// Trouve le produit correspondant à l'identifiant
const produit = produits.find(p => p.id === produitId);
console.log(produit)


// Affiche les détails du produit
if (produit) {
    const produitDetailsDiv = document.getElementById('produit-details');
    produitDetailsDiv.innerHTML =
     `  <h2>${produit.id}</h2>
        <p>${produit.nom}<p>
         <img src=${produit.url}></img>
        <p>Prix : ${produit.prix} FCFA</p>
      
       
    `;
} else {
    // Si le produit n'est pas trouvé, affiche un message d'erreur
    document.getElementById('produit-details').innerHTML = '<p>Produit non trouvé.</p>';
}
if (produit) {
    const produitDetailsDiv = document.getElementById('description-div');
    produitDetailsDiv.innerHTML =
     `  
       <p>${produit.description}</p>
    
    `;
} else {
    // Si le produit n'est pas trouvé, affiche un message d'erreur
    document.getElementById('description-div').innerHTML = '<p>Produit non trouvé.</p>';
}



//  partie calucl

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
    let listePanier = document.getElementById('listePanier');
    let totalPanier = document.getElementById('totalPanier');
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
