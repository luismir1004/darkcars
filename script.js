const galleryImages = [
    "./public/img/ferrari-sf90-dinamismo-lateral-653298.jpg",
    "./public/img/ferrari-sf90-vista-delantera-653296.jpg",
    "./public/img/ferrari-sf90-vista-lateral-653299.jpg",
    "./public/img/interior-ferrari-sf90-vista-lateral-asientos-653295.jpg",
    "./public/img/volante-cabina-sf90-653294.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    galleryImages.forEach(imageUrl => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.target = '_blank'; // Abre la imagen en una nueva pestaña
        link.rel = 'noopener noreferrer'; // Mejora de seguridad

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Imagen del Ferrari SF90";
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
});