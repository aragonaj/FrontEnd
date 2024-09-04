// ****************** botones carrusel  ******************
const carrusel = document.querySelector('#carrusel');
botones = document.querySelectorAll('.seccion-contenedor i');
botones.forEach(icon => {
    icon.addEventListener('click', () => {
        carrusel.scrollLeft += icon.id === "previo" ? -600 : 600; //432 = 27rem
    });
});