// Selectores del DOM

// querySelector (retorna un objeto)
const head2 = document.querySelector('.DOM h2');
console.log(head2); // nos retorna el objeto <h2 id="heading" class="heading"> con todas sus propiedades

console.log(head2.textContent); // "Probando el DOM"
console.log(head2.tagName); // "H2"
console.log(head2.className); // "heading"
console.log(head2.id); // "heading"

// querySelectorAll (retorna todos los elementos que correspondan al selector)
const enlances = document.querySelectorAll('.navegacion a');
console.log(enlances); // Todos los elementos <a> de la clase "navegación" ( NodeList(4) [ a, a, a, a ] )

