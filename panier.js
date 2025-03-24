function addToCart() {
    // Récupérer les informations du produit
    const product = {
        id: document.querySelector('.id')?.textContent || '12345', // ID par défaut si non trouvé
        name: document.querySelector('.nom')?.textContent || 'Produit sans nom',
        price: parseFloat(document.querySelector('.prix')?.textContent) || 0,
        quantity: parseInt(document.getElementById('quantity')?.value) || 1,
    };

    // Calculer le sous-total
    product.total = product.price * product.quantity;

    // Récupérer le panier existant ou en créer un nouveau
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Afficher un message de confirmation
    alert('Produit ajouté au panier');

    // Rediriger vers la page panier
    window.location.href = 'panier.html';
}


function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    // Vérifier si le conteneur existe
    if (!cartItemsContainer) return;

    // Vider le conteneur avant de réafficher
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>
                    <strong>ID:</strong> ${item.id} | 
                    <strong>Nom:</strong> ${item.name} | 
                    <strong>Prix unitaire:</strong> ${item.price} FCFA | 
                    <strong>Quantité:</strong> ${item.quantity} | 
                    <strong>Sous-total:</strong> ${item.total} FCFA
                    <button class="supprimer-produit" data-index="${index}">Supprimer</button>
                </p>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.total;
        });

        // Afficher le total général
        const totalElement = document.getElementById('total');
        if (totalElement) {
            totalElement.textContent = total;
        }
    }
}

// Fonction pour supprimer un produit du panier
function deleteCartItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Supprimer l'article du panier
        localStorage.setItem('cart', JSON.stringify(cart)); // Mettre à jour le localStorage
        displayCartItems(); // Réafficher les articles du panier
    }
}

// Gestion des événements
document.addEventListener('DOMContentLoaded', function () {
    // Afficher les articles du panier au chargement de la page
    displayCartItems();

    // Gestion de la suppression d'un produit
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('supprimer-produit')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            deleteCartItem(index);
        }
    });

    // Gestion de l'ajout au panier si on est sur la page de détail
    const addToCartButton = document.getElementById('ajouter-panier');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }

    // Mettre à jour le sous-total en fonction de la quantité
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('input', function () {
            const quantity = parseInt(this.value) || 1;
            const price = 2000; // Prix fixe pour cet exemple
            const subtotal = price * quantity;
            document.getElementById('soustotal').textContent = subtotal;
        });
    }

    // Gestion de la validation du panier
    const validateCartButton = document.getElementById('valider-panier');
    if (validateCartButton) {
        validateCartButton.addEventListener('click', validateCart);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const panierContainer = document.querySelector('.panier-container');
    const validerPanierBtn = document.getElementById('valider-panier');
    const formulaireLivraison = document.getElementById('formulaire-livraison');
    const recapLivraison = document.getElementById('recap-livraison');
    const recapInfos = document.getElementById('recap-infos');

    // Afficher le formulaire de livraison lors du clic sur "Valider le panier"
    validerPanierBtn.addEventListener('click', function () {
        // Masquer le panier
        panierContainer.style.display = 'none';

        // Afficher le formulaire de livraison
        formulaireLivraison.style.display = 'block';
    });

    // Soumission du formulaire de livraison
    document.getElementById('form-livraison').addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const nom = document.getElementById('nom').value;
        const pays = document.getElementById('pays').value;
        const codePostal = document.getElementById('code-postal').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const lieuActuel = document.getElementById('lieu-actuel').value;
        const destination = document.getElementById('destination').value;

        // Récupérer les informations du panier
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPanier = 0;
        cart.forEach(item => totalPanier += item.total);

        // Afficher le récapitulatif
        recapInfos.innerHTML = `
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Pays:</strong> ${pays}</p>
            <p><strong>Code postal:</strong> ${codePostal}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email || 'Non renseigné'}</p>
            <p><strong>Lieu actuel:</strong> ${lieuActuel}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <h3>Détails du panier</h3>
            <ul>
                ${cart.map(item => `
                    <li>${item.name} - ${item.quantity} x ${item.price} FCFA = ${item.total} FCFA</li>
                `).join('')}
            </ul>
            <p><strong>Total général:</strong> ${totalPanier} FCFA</p>
        `;

        // Masquer le formulaire de livraison
        formulaireLivraison.style.display = 'none';

        // Afficher la section récapitulative
        recapLivraison.style.display = 'block';
    });

    // Gestion de l'impression du récapitulatif
    document.getElementById('imprimer-recapitulatif').addEventListener('click', function () {
        window.print();
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const ajouterPanierBtn = document.getElementById('ajouter-panier');

    if (ajouterPanierBtn) {
        ajouterPanierBtn.addEventListener('click', function () {
            // Récupérer les informations du produit
            const product = {
                id: document.querySelector('.id').textContent,
                name: document.querySelector('.nom').textContent,
                price: parseFloat(document.querySelector('.prix').textContent),
                image: document.querySelector('.url').src,
                description: document.querySelector('.description').textContent,
                quantity: parseInt(document.getElementById('quantity').value),
            };

            // Calculer le sous-total
            product.total = product.price * product.quantity;

            // Récupérer le panier existant ou en créer un nouveau
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Vérifier si le produit est déjà dans le panier
            const existingProductIndex = cart.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                // Mettre à jour la quantité et le total si le produit existe déjà
                cart[existingProductIndex].quantity += product.quantity;
                cart[existingProductIndex].total += product.total;
            } else {
                // Ajouter le produit au panier s'il n'existe pas
                cart.push(product);
            }

            // Sauvegarder le panier dans le localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Afficher un message de confirmation
            alert('Produit ajouté au panier');

            // Rediriger vers la page panier
            window.location.href = 'panier.html';
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    // Vider le conteneur avant de réafficher
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>
                    <img src="${item.image}" alt="${item.name}" width="50">
                    <strong>Nom:</strong> ${item.name} | 
                    <strong>Prix unitaire:</strong> ${item.price} FCFA | 
                    <strong>Quantité:</strong> ${item.quantity} | 
                    <strong>Sous-total:</strong> ${item.total} FCFA
                    <button class="supprimer-produit" data-index="${index}">Supprimer</button>
                </p>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.total;
        });

        // Afficher le total général
        document.getElementById('total').textContent = total;
    }
});