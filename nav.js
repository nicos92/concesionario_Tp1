document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById("navBurger");
    const navContainer = document.getElementById("nav-links");
    const body = document.body;

    navBurger.addEventListener("click", function () {
        navContainer.classList.toggle("active");
        navBurger.classList.toggle("open");
        body.classList.toggle("nav-open");
    });

    const navitems = document.querySelectorAll(".nav-item");

    navitems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (navContainer.classList.contains("active")) {
                navContainer.classList.remove("active");
                navBurger.classList.remove("open");
                body.classList.remove("nav-open");
            }
        });
    });
});