import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const productsData = [
    { id: 1, name: 'Ferrari SF90', price: 1200000, image: '/img/ferrari-sf90-vista-delantera-653296.jpg', engine: 'V8 Híbrido Enchufable', power: '1000 CV', description: 'El SF90 Stradale es el primer superdeportivo híbrido de producción en serie de Ferrari.' },
    { id: 2, name: 'Ferrari 488', price: 950000, image: '/img/joshua-koblin-eqW1MPinEV4-unsplash.jpg', engine: 'V8 Bi-Turbo', power: '670 CV', description: 'Sucesor del 458 Italia, el 488 GTB marcó el regreso de los motores turbo a los modelos de motor central de la marca.' },
    { id: 3, name: 'Ferrari F8', price: 1100000, image: '/img/2020-Ferrari-F8-Tributo-007-1600.jpg', engine: 'V8 Bi-Turbo', power: '720 CV', description: 'El F8 Tributo es un homenaje al motor V8 de Ferrari, considerado uno de los mejores del mundo.' },
];

function HomePage() {
    const [products, setProducts] = useState(productsData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const addToCart = (productId) => {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
            setCart([...cart, productToAdd]);
            setIsModalOpen(true);
        }
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);


    return (
        <>
            <Header showCartButton={true} onCartClick={() => setIsModalOpen(true)} />
            <section id="hero">
                <div className="hero-content">
                    <h1>Super Autos</h1>
                    <p>Tu concesionario de super deportivos de confianza.</p>
                </div>
            </section>
            <main>
                <section id="products">
                    <h2>Nuestros Deportivos</h2>
                    <div className="carousel-container">
                        <div className="product-list">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`product-card ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + products.length) % products.length ? 'prev' : ''} ${index === (currentIndex + 1) % products.length ? 'next' : ''}`}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>Añadir al Carrito</button>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-btn prev-btn" onClick={prevProduct}>‹</button>
                        <button className="carousel-btn next-btn" onClick={nextProduct}>›</button>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Super Autos. Todos los derechos reservados.</p>
            </footer>

            {isModalOpen && (
                <div id="cart-modal-overlay">
                    <div id="cart-modal">
                        <div className="modal-header">
                            <h2>Carrito de Compras</h2>
                            <button id="close-modal-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <div id="cart-modal-body">
                            {cart.length === 0 ? (
                                <p>Tu carrito está vacío.</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={index} className="modal-cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="modal-item-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                        </div>
                                        <button className="remove-from-cart-btn" onClick={() => removeFromCart(index)}>Eliminar</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="modal-footer">
                            <p>Total: <span id="modal-total-price">{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span></p>
                            <button id="checkout-btn">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default HomePage;
