document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll(".section");
    
    if (window.innerWidth <= 575) {
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }
    
    if (window.innerWidth > 575) {
        const observer = new IntersectionObserver(
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

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 575) {
            sections.forEach(section => {
                section.classList.add('visible');
            });
        } else {
            sections.forEach(section => {
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
