document.addEventListener('DOMContentLoaded', () => {
    const opinionItems = document.querySelectorAll('.opinion-item');



    for (const element of opinionItems) {
        let estrellas = 5;


        const starElement = document.createElement('span');
        starElement.classList.add('star-counter');

        for (let i = 0; i < estrellas; i++) {
            const starImg = document.createElement('img');
            starImg.src = 'imgs/star.svg';
            starElement.appendChild(starImg);
        }

        element.querySelector('.opinion-content').insertBefore(starElement, item.querySelector('.opinion-description'));
    }
});