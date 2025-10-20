document.addEventListener('DOMContentLoaded', () => {
    const opinionItems = document.querySelectorAll('.opinion-item');

    opinionItems.forEach((item) => {
        let starCounter = 5; 

        

        const starElement = document.createElement('span');
        starElement.classList.add('star-counter');

        for (let i = 0; i < starCounter; i++) {
            const starImg = document.createElement('img');
            starImg.src = 'imgs/star.svg';
            starElement.appendChild(starImg);
        }

        item.querySelector('.opinion-content').insertBefore(starElement, item.querySelector('.opinion-description'));
    });
});