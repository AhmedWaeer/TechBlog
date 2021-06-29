/* eslint-disable prettier/prettier */
const newPostHandler = async(event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#content').value.trim();
    if (title && body) {
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('#new-post').addEventListener('submit', newPostHandler);