// All DOM Elements
const menuButton = document.getElementById("menu-btn");
const cartButton = document.getElementById("cart-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");
const cart = document.getElementById("cart");
const cartCloseButton = document.getElementById("cart-close-icon");
const allLinkElements = navLinks.querySelectorAll('a');

// All Event Listeners
// 1 - Event Listener - click menu icon to toggle nav links
menuButton.addEventListener('click', e => {
    if(!navLinks.classList.contains('show')) {
        navLinks.classList.add('show');
        document.getElementById("menu-icon").className = 'fa-solid fa-xmark';
    } else {
        navLinks.classList.remove('show');
        document.getElementById("menu-icon").className = 'fa-solid fa-bars';
    }
})

// 2 - Event Listener - click cart icon to toggle cart UI
cartButton.addEventListener('click', e => {
    if(!cart.classList.contains('show')) {
        cart.classList.add('show');
    } else {
        cart.classList.remove('show');
    }
})

// 3 - Event Listener - click cart close button to close cart UI
cartCloseButton.addEventListener('click', e => {
    cart.classList.remove('show');
})

// 4 - Event Listeners - hide nav links on clicking any link also
allLinkElements.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.classList.remove('show');
        document.getElementById("menu-icon").className = 'fa-solid fa-bars';
    })
})