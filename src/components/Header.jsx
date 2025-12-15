import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ showCartButton, onCartClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

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

        // Close menu if window is resized to be larger
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Super Autos</Link></div>
            
            <button 
                className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={menuOpen ? 'active' : ''}>
                <ul onClick={() => setMenuOpen(false)}> {/* Close menu on link click */}
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
