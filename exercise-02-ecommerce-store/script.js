// ===================================================================================
// All DOM Elements
// ===================================================================================
const menuButton = document.getElementById("menu-btn");
const cartButton = document.getElementById("cart-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");
const cart = document.getElementById("cart");
const cartCloseButton = document.getElementById("cart-close-icon");
const allLinkElements = navLinks.querySelectorAll('a');
const allProductsContainer = document.getElementById('all-products-container');
const cartContainer = document.getElementById('cart-items-container');
const totalBill = document.getElementById('total-bill');
const notification = document.getElementById('notification');
const checkout = document.getElementById('checkout');
const search = document.getElementById('search');

// ===================================================================================
// Required Variables and Arrays
// ===================================================================================
const allProducts = [
    {
        title: 'Brown Purse',
        category: 'Bag',
        price: 100,
        thumbnail: './assets/images/bag-1.jpg',
    },
    {
        title: 'Camera',
        category: 'Electronics',
        price: 200,
        thumbnail: './assets/images/camera-1.jpg',
    },
    {
        title: 'Glasses A',
        category: 'Glasses',
        price: 50,
        thumbnail: './assets/images/glasses-1.jpg',
    },
    {
        title: 'Glasses B',
        category: 'Glasses',
        price: 80,
        thumbnail: './assets/images/glasses-2.jpg',
    },
    {
        title: 'Glasses C',
        category: 'Glasses',
        price: 120,
        thumbnail: './assets/images/glasses-3.jpg',
    },
    {
        title: 'Camera Lens',
        category: 'Electronics',
        price: 40,
        thumbnail: './assets/images/lens-1.jpg',
    },
    {
        title: 'Purse',
        category: 'Bag',
        price: 90,
        thumbnail: './assets/images/purse-1.jpg',
    },
    {
        title: 'Shoes A',
        category: 'Shoes',
        price: 100,
        thumbnail: './assets/images/shoes-1.jpg',
    },
    {
        title: 'Shoes B',
        category: 'Shoes',
        price: 120,
        thumbnail: './assets/images/shoes-2.jpg',
    },
    {
        title: 'Shoes C',
        category: 'Shoes',
        price: 200,
        thumbnail: './assets/images/shoes-3.jpg',
    },
    {
        title: 'Shoes D',
        category: 'Shoes',
        price: 150,
        thumbnail: './assets/images/shoes-4.jpg',
    },
    {
        title: 'Watch A',
        category: 'Watches',
        price: 50,
        thumbnail: './assets/images/watch-1.jpg',
    },
    {
        title: 'Watch B',
        category: 'Watches',
        price: 150,
        thumbnail: './assets/images/watch-2.jpg',
    },
    {
        title: 'Watch C',
        category: 'Watches',
        price: 70,
        thumbnail: './assets/images/watch-3.jpg',
    },
]

let filteredProducts = [];
let cartProducts = [];

// ===================================================================================
// All Functions
// ===================================================================================
// 1 - Function - to update all Products DOM
const updateAllProductsDOM = () => {
    if(allProducts.length === 0) {
        allProductsContainer.innerHTML = `<p>No Products Found.</p>`;
        return;
    }

    allProductsContainer.innerHTML = `${
        filteredProducts.map((product, index) => {
            return `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="product-image-${index}">
                <div class="product-details">
                    <h2>${product.title}</h2>
                    <small>Category: ${product.category}</small>
                    <p>Price $${product.price}</p>
                    <button data-index="product-${index}" class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
            `
        }).join("")
    }`

    const allProductCardButtons = document.getElementsByClassName('add-to-cart-btn');

    Array.from(allProductCardButtons).forEach(btn => btn.addEventListener('click', addToCart))
}

// 2 - Function - to add product to cart
const addToCart = (e) => {
    cartProducts.push(filteredProducts[parseInt(e.target.getAttribute('data-index').split('-')[1])])
    updateCartDOM();
}

// 3 - Function - to update Cart DOMz
const updateCartDOM = () => {
    // Render DOM
    if(cartProducts.length === 0) {
        cartContainer.innerHTML = `<p class="message">No Products Selected.</p>`;
        totalBill.innerHTML = '0';
        if(notification.classList.contains('show'))
            notification.classList.remove('show')
        return;
    }
    cartContainer.innerHTML = `${
        cartProducts.map((product, index) => {
            return `
            <div class="cart-product-card">
                <img src="${product.thumbnail}" alt="cart-product-${index}">
                <div class="cart-product-details">
                    <p>${product.title}</p>
                    <small>Category: ${product.category}</small>
                    <p>Price $${product.price}</p>
                </div>
                <button data-index="cart-product-${index}" class="cart-product-close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            `
        }).join("")
    }`

    // Add Event Listener
    const allCartProductCloseButtons = document.getElementsByClassName('cart-product-close-btn');
    Array.from(allCartProductCloseButtons).forEach(btn => btn.addEventListener('click', removeProductFromCart))

    // Update total bill
    let amount = 0;
    cartProducts.forEach(product => {
        amount += product.price;
    });
    totalBill.innerHTML = `${amount}`

    // Show Notification
    notification.innerHTML = `${cartProducts.length}`
    if(!notification.classList.contains('show'))
        notification.classList.add('show')
}

// 4 - Function - to remove product from cart
const removeProductFromCart = (e) => {
    cartProducts = cartProducts.filter((product, index) => index !== parseInt(e.target.getAttribute('data-index').split('-')[2]));
    updateCartDOM();
}

// 5 - Function - to filter products
const filterProductsByText = (text = "") => {
    text = text.toLowerCase();
    filteredProducts = allProducts.filter((product) => {
        if(product.title.toLowerCase().includes(text) || product.category.toLowerCase().includes(text))
        {
            return product;
        }
    });
    updateAllProductsDOM();
}

// ===================================================================================
// All Event Listeners
// ===================================================================================
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
});

// 5 - Event Listener - to checkout
checkout.addEventListener('click', e => {
    cartProducts = [];
    updateCartDOM();
})

// 6 - Event Listerner - to filter products by text
search.addEventListener('input', e => filterProductsByText(e.target.value))

// ===================================================================================
// Init
// ===================================================================================
filterProductsByText();
updateAllProductsDOM();
updateCartDOM();