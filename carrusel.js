document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carrusel-contenedor");
    const carouselItems = document.querySelectorAll(".carrusel-item");
    const btnatras = document.querySelector(".btn-atras");
    const btnsiguiente = document.querySelector(".btn-siguiente");
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

    if (btnatras && btnsiguiente) {
        btnatras.addEventListener("click", () => {
            stopCarousel();
            prevSlide();
            startCarousel();
        });

        btnsiguiente.addEventListener("click", () => {
            stopCarousel();
            nextSlide();
            startCarousel();
        });
    }
    startCarousel();
});
