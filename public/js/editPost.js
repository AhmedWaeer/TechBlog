/* eslint-disable prettier/prettier */
const updateHandler = async(event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#content').value.trim();
    const id = document.querySelector('input[name="post-id"]').value;
    if (title && body) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
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


const deleteHandler = async() => {
    const id = document.querySelector('input[name="post-id"]').value;
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('#edit-form').addEventListener('submit', updateHandler);
document.querySelector('#delete').addEventListener('click', deleteHandler);