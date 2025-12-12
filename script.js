document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Ferrari SF90', price: 1200000, image: './public/img/ferrari-sf90-vista-delantera-653296.jpg' },
        { id: 2, name: 'Ferrari 488', price: 950000, image: './public/img/daniel-garcia-eU0J-cMaW7M-unsplash.jpg' },
        { id: 3, name: 'Ferrari F8', price: 1100000, image: './public/img/ferrari-sf90-vista-lateral-653299.jpg' },
    ];

    const productList = document.querySelector('.product-list');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cartIcon = document.getElementById('cart-icon');
    const cartModalOverlay = document.getElementById('cart-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cartModalBody = document.getElementById('cart-modal-body');
    const modalTotalPriceElement = document.getElementById('modal-total-price');

    let cart = [];
    let currentIndex = 0;

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
            `;
            productList.appendChild(productCard);
        });
    }

    function updateCarousel() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex - 1 + products.length) % products.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 1) % products.length) {
                card.classList.add('next');
            }
        });
    }

    function renderCart() {
        cartModalBody.innerHTML = '';
        if (cart.length === 0) {
            cartModalBody.innerHTML = '<p>Tu carrito está vacío.</p>';
            return;
        }
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'modal-cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="modal-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()}</p>
                </div>
                <button class="remove-from-cart-btn" data-index="${index}">Eliminar</button>
            `;
            cartModalBody.appendChild(cartItem);
        });
    }

    function updateTotalPrice() {
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        modalTotalPriceElement.textContent = `${totalPrice.toLocaleString()}`;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
            updateTotalPrice();
            toggleModal(true);
        }
    }

    function removeFromCart(itemIndex) {
        cart.splice(itemIndex, 1);
        renderCart();
        updateTotalPrice();
    }

    function toggleModal(show) {
        cartModalOverlay.classList.toggle('hidden', !show);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateCarousel();
    });

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const activeCard = e.target.closest('.product-card.active');
            if (activeCard) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                addToCart(productId);
            }
        }
    });

    cartModalBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart-btn')) {
            const itemIndex = parseInt(e.target.getAttribute('data-index'));
            removeFromCart(itemIndex);
        }
    });

    cartIcon.addEventListener('click', () => toggleModal(true));
    closeModalBtn.addEventListener('click', () => toggleModal(false));
    cartModalOverlay.addEventListener('click', (e) => {
        if (e.target === cartModalOverlay) {
            toggleModal(false);
        }
    });

    renderProducts();
    updateCarousel();
});