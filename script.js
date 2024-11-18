 // Gestion de la recherche de produits
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const productElements = document.querySelectorAll(".product");

searchButton.addEventListener("click", function() {
    const query = searchInput.value.toLowerCase();

    // Parcourir tous les produits
    productElements.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        
        // Si le nom du produit correspond à la recherche, on l'affiche, sinon on le cache
         if (productName.includes(query)) {
            product.style.display = "block";
        }  else {
            product.style.display = "none";
             
        } 
    });
}); 

// Option pour effectuer la recherche avec la touche "Enter"
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slides');
const images = document.querySelector ('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const translateX = -currentIndex * 100; // Décalage horizontal pour afficher la prochaine image
    slides.style.transform = `translateX(${translateX}%)`;
}

// Démarrage du carrousel avec un intervalle de 3 secondes
//setInterval(showNextSlide, 3000);
 
document.querySelector('.next').addEventListener('click', () => {
    goToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    goToPrevSlide();
});

function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

updateCarousel();




// Mise à jour du panier
let cart = [];
let cartCountElement = document.getElementById("cart-count");
let cartItemsTable = document.getElementById("cart-items").getElementsByTagName('tbody')[0];
let cartTotalElement = document.getElementById("cart-total");

const products = document.querySelectorAll(".product");

products.forEach(product => {
    const addToCartButton = product.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => {
        const id = product.getAttribute("data-id");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));

        // Ajouter le produit au panier
        const item = { id, name, price };
        cart.push(item);
        updateCartCount();
        updateCartDetails();
    });
});

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function updateCartDetails() {
    cartItemsTable.innerHTML = "";
    let total = 0;

    // Affichage des articles du panier
    cart.forEach((item, index) => {
        let row = cartItemsTable.insertRow();

        let nameCell = row.insertCell(0);
        let priceCell = row.insertCell(1);
        let actionCell = row.insertCell(2);

        nameCell.textContent = item.name;
        priceCell.textContent = item.price + "€";

        let removeButton = document.createElement("button");
        removeButton.textContent = "Supprimer";
        removeButton.addEventListener("click", () => {
            removeItemFromCart(index);
        });
        actionCell.appendChild(removeButton);

        total += item.price;
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function removeItemFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDetails();
}



// Gestion du formulaire de paiement
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const paymentMethod = document.getElementById("payment-method").value;
    const deliveryLocation = document.getElementById("delivery-location").value;

    if (cart.length === 0) {
        alert("Votre panier est vide!");
        return;
    }

    if (paymentMethod && deliveryLocation) {
        alert(`Commande validée! \nMoyen de paiement: ${paymentMethod}\nLieu de livraison: ${deliveryLocation}`);
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});

// gestion du burger
 
        const menuBurger = document.querySelector('#menu-burger');
        const nav = document.querySelector('nav ul');

        menuBurger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
   // Fonction pour changer la langue
   function changeLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;
    const translation = translations[selectedLanguage];
}