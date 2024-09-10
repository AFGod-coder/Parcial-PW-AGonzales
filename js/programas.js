document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.botonCard');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const description = card.querySelector('p').innerText;
            alert(description);
        });
    });
});