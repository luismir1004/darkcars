const galleryImages = [
    { src: "./public/img/ferrari-sf90-dinamismo-lateral-653298.jpg", alt: "Ferrari SF90 en movimiento lateral" },
    { src: "./public/img/ferrari-sf90-vista-delantera-653296.jpg", alt: "Vista delantera del Ferrari SF90" },
    { src: "./public/img/ferrari-sf90-vista-lateral-653299.jpg", alt: "Vista lateral del Ferrari SF90" },
    { src: "./public/img/interior-ferrari-sf90-vista-lateral-asientos-653295.jpg", alt: "Interior y asientos del Ferrari SF90" },
    { src: "./public/img/volante-cabina-sf90-653294.jpg", alt: "Volante y cabina del Ferrari SF90" }
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    galleryImages.forEach(image => {
        const link = document.createElement('a');
        link.href = image.src;
        link.target = '_blank'; // Abre la imagen en una nueva pestaña
        link.rel = 'noopener noreferrer'; // Mejora de seguridad

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add('gallery-image');

        link.appendChild(img);
        gallery.appendChild(link);
    });

    // Botón de Scroll hacia Arriba
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scroll-to-top';
    scrollToTopButton.innerHTML = '↑';
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for fade-in effect
    const revealSections = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });
});