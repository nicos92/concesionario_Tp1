document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById("navBurger");
    const navContainer = document.getElementById("nav-links");

    navBurger.addEventListener("click", function () {
        navContainer.classList.toggle("active");

        navBurger.classList.toggle("open");
    });

    const navitems = document.querySelectorAll(".nav-item");

    navitems.forEach(function (item) {
        item.addEventListener("click", function () {
            navContainer.classList.toggle("active");
            navBurger.classList.toggle("open");
        });
    });
});

