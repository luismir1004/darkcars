import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ showCartButton, onCartClick }) {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Super Autos</Link></div>
            <nav>
                <ul>
                    <li><Link to="/login">Inicia Sesión</Link></li>
                    <li><Link to="/login">Registrate</Link></li>
                    <li><a href="/#products">Productos</a></li>
                    {showCartButton && (
                         <li><a href="#" id="cart-icon" aria-label="Carrito de Compras" onClick={onCartClick}>🛒</a></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
