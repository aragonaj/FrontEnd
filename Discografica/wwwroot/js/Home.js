// ****************** botones carrusel  ******************
const carrusel = document.querySelector('#carrusel');
botones = document.querySelectorAll('.seccion-contenedor i');
botones.forEach(icon => {
    icon.addEventListener('click', () => {
        carrusel.scrollLeft += icon.id === "previo" ? -600 : 600; //432 = 27rem
    });
});

// *********** cambiar color barra navegación ***********
// nota: 100vh equivalen a 900px
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 900) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});