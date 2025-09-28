document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll(".section");
    
    // For small screens, add visible class by default to ensure content shows
    if (window.innerWidth <= 575) {
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }
    
    // For larger screens, use Intersection Observer as before
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
    
    // Also handle window resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 575) {
            sections.forEach(section => {
                section.classList.add('visible');
            });
        } else {
            // Remove observer and re-initialize for larger screens
            sections.forEach(section => {
                // Keep visible if currently in view, otherwise hide
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
