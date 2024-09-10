/* <article class="card">
            <img src="/img/programa1.jpg" alt="">
            <div>
                <h2>Card</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tempore dolorem pariatur, commodi sint quam reprehenderit enim ratione in nesciunt aperiam, numquam debitis quos laudantium accusantium unde veniam officiis quia!</p>
                <button class="botonCard">
                Go 
                </button>
            </div>
        </article>
        
*/

const card = document.querySelector('.card');
card.addEventListener('click', (e) => {
    array.forEach(element => {
        console.log('click en card');
        e.stopPropagation();
    });
});