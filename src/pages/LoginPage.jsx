import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [activeForm, setActiveForm] = useState('login'); // 'login' or 'register'

    const handleSelectorClick = (form) => {
        setActiveForm(form);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Super Autos</Link></div>
                    <ul>
                        <li><Link to="/#products">Productos</Link></li>
                        <li><Link to="#" id="cart-icon">🛒</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="login-main">
                <div className="login-container">
                    <div className="form-selector">
                        <button
                            className={`selector-btn ${activeForm === 'login' ? 'active' : ''}`}
                            onClick={() => handleSelectorClick('login')}
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            className={`selector-btn ${activeForm === 'register' ? 'active' : ''}`}
                            onClick={() => handleSelectorClick('register')}
                        >
                            Registrarse
                        </button>
                    </div>

                    {/* Formulario de Login */}
                    <form id="login-form" className={`auth-form ${activeForm === 'login' ? 'active' : ''}`}>
                        <h2>Iniciar Sesión</h2>
                        <div className="input-group">
                            <label htmlFor="login-email">Email</label>
                            <input type="email" id="login-email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="login-password">Contraseña</label>
                            <input type="password" id="login-password" required />
                        </div>
                        <button type="submit" className="submit-btn">Entrar</button>
                        <p className="form-message"></p>
                    </form>

                    {/* Formulario de Registro */}
                    <form id="register-form" className={`auth-form ${activeForm === 'register' ? 'active' : ''}`}>
                        <h2>Crear Cuenta</h2>
                        <div className="input-group">
                            <label htmlFor="register-username">Nombre de Usuario</label>
                            <input type="text" id="register-username" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="register-email">Email</label>
                            <input type="email" id="register-email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="register-password">Contraseña</label>
                            <input type="password" id="register-password" required />
                        </div>
                        <button type="submit" className="submit-btn">Registrarse</button>
                        <p className="form-message"></p>
                    </form>
                </div>
            </main>
        </>
    );
}

export default LoginPage;
