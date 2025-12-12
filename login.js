document.addEventListener('DOMContentLoaded', () => {
    const formSelector = document.querySelector('.form-selector');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Logic to switch between login and register forms
    formSelector.addEventListener('click', (e) => {
        if (e.target.classList.contains('selector-btn')) {
            const formToActivate = e.target.dataset.form;

            // Update button active state
            formSelector.querySelectorAll('.selector-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Update form visibility
            if (formToActivate === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
            }
        }
    });

    // --- Simulated Backend Interaction ---

    // Handle Registration Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const messageEl = registerForm.querySelector('.form-message');

        // Basic validation
        if (!username || !email || !password) {
            showMessage(messageEl, 'Por favor, rellena todos los campos.', 'error');
            return;
        }

        showMessage(messageEl, 'Registrando...', 'loading');

        // ** SIMULATED API CALL **
        // In a real application, you would send this data to your backend:
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, email, password })
        // })
        // .then(response => response.json())
        // .then(data => { ... });

        setTimeout(() => {
            // Simulate a successful registration
            showMessage(messageEl, '¡Registro completado! Ahora puedes iniciar sesión.', 'success');
            registerForm.reset();
            
            // Switch to the login form after a short delay
            setTimeout(() => {
                 formSelector.querySelector('[data-form="login"]').click();
            }, 1500);

        }, 2000); // Simulate network delay
    });

    // Handle Login Form Submission
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

        // ** SIMULATED API CALL **
        // In a real application, you would send this data to your backend:
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // })
        // .then(response => response.json())
        // .then(data => { 
        //     if (data.success) {
        //          // Store token/session and redirect
        //          localStorage.setItem('authToken', data.token);
        //          window.location.href = '/';
        //     } else {
        //          showMessage(messageEl, data.message, 'error');
        //     }
        // });
        
        setTimeout(() => {
            // Simulate a successful login
            if (email === "test@test.com" && password === "password") {
                 showMessage(messageEl, '¡Sesión iniciada correctamente! Redirigiendo...', 'success');
                 // In a real app, you would redirect to the main page
                 setTimeout(() => {
                    window.location.href = '/'; // Redirect to the main page
                 }, 1500);
            } else {
                // Simulate incorrect credentials
                showMessage(messageEl, 'Email o contraseña incorrectos.', 'error');
            }
        }, 2000); // Simulate network delay
    });

    function showMessage(element, text, type) {
        element.textContent = text;
        element.className = 'form-message'; // Reset classes
        if (type === 'success') {
            element.classList.add('success');
        } else if (type === 'error') {
            element.classList.add('error');
        }
    }
});
