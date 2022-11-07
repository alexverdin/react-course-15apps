// Iteradores de Arreglos
const tecnologies = ['HTML', 'CSS', 'JS', 'React'];

// forEach() ejecuta una función una vez por cada valor del arreglo.
// NO permite crear un nuevo array.
const test = tecnologies.forEach( function(){
    console.log("Ejecutando funcion"); // Se imprime una vez por cada elemento del arreglo, en este caso, 4 veces
});


// map() ejecuta una función una vez por cada elemento del arreglo.
// PERMITE crear un nuevo array.
const newArrayMap = tecnologies.map( function(tech){
    return tech;
});
console.log(newArrayMap); // ['HTML', 'CSS', 'JS', 'React']