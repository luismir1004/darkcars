document.addEventListener('DOMContentLoaded', () => {
    const formSelector = document.querySelector('.form-selector');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Lógica para cambiar entre los formularios de login y registro
    formSelector.addEventListener('click', (e) => {
        if (e.target.classList.contains('selector-btn')) {
            const formToActivate = e.target.dataset.form;

            // Actualizar el estado activo del botón
            formSelector.querySelectorAll('.selector-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Actualizar la visibilidad del formulario
            if (formToActivate === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
            }
        }
    });

    // --- Interacción Simulada con el Backend ---

    // Manejar el envío del formulario de registro
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const messageEl = registerForm.querySelector('.form-message');

        // Validación básica
        if (!username || !email || !password) {
            showMessage(messageEl, 'Por favor, rellena todos los campos.', 'error');
            return;
        }

        showMessage(messageEl, 'Registrando...', 'loading');

        // ** LLAMADA SIMULADA A LA API **
        // En una aplicación real, enviarías estos datos a tu backend:
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, email, password })
        // })
        // .then(response => response.json())
        // .then(data => { ... });

        setTimeout(() => {
            // Simular un registro exitoso
            showMessage(messageEl, '¡Registro completado! Ahora puedes iniciar sesión.', 'success');
            registerForm.reset();
            
            // Cambiar al formulario de login después de un breve retraso
            setTimeout(() => {
                 formSelector.querySelector('[data-form="login"]').click();
            }, 1500);

        }, 2000); // Simular retraso de red
    });

    // Manejar el envío del formulario de login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const messageEl = loginForm.querySelector('.form-message');

        if (!email || !password) {
            showMessage(messageEl, 'Por favor, introduce tu email y contraseña.', 'error');
            return;
        }

        showMessage(messageEl, 'Iniciando sesión...', 'loading');

        // ** LLAMADA SIMULADA A LA API **
        // En una aplicación real, enviarías estos datos a tu backend:
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // })
        // .then(response => response.json())
        // .then(data => { 
        //     if (data.success) {
        //          // Guardar token/sesión y redirigir
        //          localStorage.setItem('authToken', data.token);
        //          window.location.href = '/';
        //     } else {
        //          showMessage(messageEl, data.message, 'error');
        //     }
        // });
        
        setTimeout(() => {
            // Simular un login exitoso
            if (email === "test@test.com" && password === "password") {
                 showMessage(messageEl, '¡Sesión iniciada correctamente! Redirigiendo...', 'success');
                 // En una aplicación real, redirigirías a la página principal
                 setTimeout(() => {
                    window.location.href = '/'; // Redirigir a la página principal
                 }, 1500);
            } else {
                // Simular credenciales incorrectas
                showMessage(messageEl, 'Email o contraseña incorrectos.', 'error');
            }
        }, 2000); // Simular retraso de red
    });

    function showMessage(element, text, type) {
        element.textContent = text;
        element.className = 'form-message'; // Resetear clases
        if (type === 'success') {
            element.classList.add('success');
        } else if (type === 'error') {
            element.classList.add('error');
        }
    }
});
