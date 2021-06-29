/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

const addCommentHandler = async(event) => {
    event.preventDefault();
    const number = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
    const Id = number.split('');
    let postId = Id.filter((x) => x !== "?").join('');
    const body = document.querySelector('#comment').value.trim();
    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ body, postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('#comment-form').addEventListener('submit', addCommentHandler);