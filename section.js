document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll(".section");
    
    if (window.innerWidth <= 575) {
        secciones.forEach(section => {
            section.classList.add('visible');
        });
    }
    
    if (window.innerWidth > 575) {
        const observador = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        secciones.forEach((section) => {
            observador.observe(section);
        });
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 575) {
            secciones.forEach(section => {
                section.classList.add('visible');
            });
        } else {
            secciones.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        }
    });
});
