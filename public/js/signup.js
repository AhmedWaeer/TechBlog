/* eslint-disable prettier/prettier */
const signupHandler = async(event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ email: email.value, password: password.value }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('login');
    } else {
        alert(response.statusText);
    }

};
document.querySelector('#signup-form').addEventListener('submit', signupHandler);