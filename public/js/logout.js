/* eslint-disable prettier/prettier */
const logoutHandler = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logoutHandler);