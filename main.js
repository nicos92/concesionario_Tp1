document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;
    let intervalId;

    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselContainer.style.transform = `translateX(-${
            currentIndex * itemWidth
        }px)`;
    }

    function prevSlide() {
        currentIndex =
            (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function startCarousel() {
        intervalId = setInterval(nextSlide, 3000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
            stopCarousel();
            prevSlide();
            startCarousel();
        });

        nextButton.addEventListener("click", () => {
            stopCarousel();
            nextSlide();
            startCarousel();
        });
    }
    startCarousel();
});
