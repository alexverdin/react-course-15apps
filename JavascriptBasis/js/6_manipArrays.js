// Arreglos
const tecnologies = ['HTML', 'CSS', 'JS', 'React']

// Agregar elementos a un arreglo.
const newArrayAdd = [...tecnologies, 'GraphQL'];
console.table(newArrayAdd); //['HTML', 'CSS', 'React', 'GraphQL']

// Eliminar elementos de un arreglo
const newArrayDel = tecnologies.filter( function(tech){
    return tech !== 'HTML'; //regresa todos los elementos que no sean 'HTML'
});
console.table(newArrayDel); //['CSS', 'React']

// Reemplazar elementos del arreglo
const newArrayEdit = tecnologies.map(function (tech){
    if(tech === 'HTML'){
        return 'Vite';
    } else {
        return tech;
    }
});
console.table(newArrayEdit); //['Vite', 'CSS', 'React']

// Arreglo original (podemos observar que no es modificado)
console.table(tecnologies);