document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Verschijnt zodra 10% van het element in beeld is
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});