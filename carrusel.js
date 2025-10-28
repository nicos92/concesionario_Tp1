document.addEventListener("DOMContentLoaded", function () {
    const carruselContenedor = document.querySelector(".carrusel-contenedor");
    const carruselItems = document.querySelectorAll(".carrusel-item");
    const btnatras = document.querySelector(".btn-atras");
    const btnsiguiente = document.querySelector(".btn-siguiente");
    let currentIndex = 0;
    let intervalId;

    function actualizarCarrusel() {
        const itemWidth = carruselItems[0].offsetWidth;
        carruselContenedor.style.transform = `translateX(-${
            currentIndex * itemWidth
        }px)`;
    }

    function antesDeCambiar() {
        currentIndex =
            (currentIndex - 1 + carruselItems.length) % carruselItems.length;
        actualizarCarrusel();
    }

    function siguienteItem() {
        currentIndex = (currentIndex + 1) % carruselItems.length;
        actualizarCarrusel();
    }

    function arrancarCarrusel() {
        intervalId = setInterval(siguienteItem, 3000);
    }

    function detenerCarrusel() {
        clearInterval(intervalId);
    }

    if (btnatras && btnsiguiente) {
        btnatras.addEventListener("click", () => {
            detenerCarrusel();
            antesDeCambiar();
            arrancarCarrusel();
        });

        btnsiguiente.addEventListener("click", () => {
            detenerCarrusel();
            siguienteItem();
            arrancarCarrusel();
        });
    }
    arrancarCarrusel();
});
