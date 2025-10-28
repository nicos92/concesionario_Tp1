document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById("navBurger");
    const navContenedor = document.getElementById("nav-links");
    const body = document.body;

    navBurger.addEventListener("click", function () {
        navContenedor.classList.toggle("active");
        navBurger.classList.toggle("open");
        body.classList.toggle("nav-open");
    });

    const navitems = document.querySelectorAll(".nav-item");

    navitems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (navContenedor.classList.contains("active")) {
                navContenedor.classList.remove("active");
                navBurger.classList.remove("open");
                body.classList.remove("nav-open");
            }
        });
    });
});