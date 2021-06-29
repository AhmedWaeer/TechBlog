/* eslint-disable prettier/prettier */
const loginHandler = async(event) => {
    event.preventDefault();
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    if (email && password) {

        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }

        });
        if (response.ok) {
            alert("You are now logged in")
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}




document.querySelector('#login-form').addEventListener('submit', loginHandler);