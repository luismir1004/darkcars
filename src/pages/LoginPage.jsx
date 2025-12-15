import React, { useState } from 'react';
import Header from '../components/Header';
import '../../login.css';

function LoginPage() {
    const [activeForm, setActiveForm] = useState('login'); // 'login' or 'register'

    // State for Login form
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // State for Register form
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleSelectorClick = (form) => {
        setActiveForm(form);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement login logic
        console.log('Login attempt with:', { email: loginEmail, password: loginPassword });
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement registration logic
        console.log('Registering with:', { username: registerUsername, email: registerEmail, password: registerPassword });
    };

    return (
        <>
            <Header showCartButton={false} />
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
                    <form id="login-form" className={`auth-form ${activeForm === 'login' ? 'active' : ''}`} onSubmit={handleLoginSubmit}>
                        <h2>Iniciar Sesión</h2>
                        <div className="input-group">
                            <label htmlFor="login-email">Email</label>
                            <input
                                type="email"
                                id="login-email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="login-password">Contraseña</label>
                            <input
                                type="password"
                                id="login-password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Entrar</button>
                        <p className="form-message"></p>
                    </form>

                    {/* Formulario de Registro */}
                    <form id="register-form" className={`auth-form ${activeForm === 'register' ? 'active' : ''}`} onSubmit={handleRegisterSubmit}>
                        <h2>Crear Cuenta</h2>
                        <div className="input-group">
                            <label htmlFor="register-username">Nombre de Usuario</label>
                            <input
                                type="text"
                                id="register-username"
                                value={registerUsername}
                                onChange={(e) => setRegisterUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="register-email">Email</label>
                            <input
                                type="email"
                                id="register-email"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="login-password">Contraseña</label>
                            <input
                                type="password"
                                id="register-password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                                required
                            />
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
