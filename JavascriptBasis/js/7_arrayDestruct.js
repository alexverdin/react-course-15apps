// Destructuring de Arrays
const tecnologies = ['HTML', 'CSS', 'JS', 'React']

const [html, reactJs] = tecnologies;
console.log(html, reactJs); // HTML CSS

// extracción de cierta posición en el array
const [,,,var1] = tecnologies;
console.log(var1); // React