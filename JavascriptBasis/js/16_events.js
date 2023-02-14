// Eventos en JS
const heading = document.querySelector('.heading'); // para manipular el DOM, primero es necesario recuperar el elemento y manipularlo desde una variable
const enlaces = document.querySelectorAll('.navegacion a'); // recupera todos los enlaces de la clase "navegacion" y los almacena como un objeto que contiene una nodeList

const clickHeading = () => {
    heading.textContent = "Nuevo Header"
}
heading.addEventListener('click', clickHeading)

console.log(enlaces)
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log("hiciste clic en un link");
    })
    enlace.textContent = 'Nuevo Link'
})

