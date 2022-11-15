// Array Methods no mutables
const tecnologies = ['HTML', 'CSS', 'JS', 'React'];
const numbers = [8, 24, 6, 13, 90, 33]

// Filter() - Crea un nuevo array en base a una condición.
const newArray = tecnologies.filter( tech => tech !== 'React');
console.log(newArray); // ['HTML', 'CSS', 'JS']

// Includes() - Comprueba si un elemento existe en el arreglo
const existTech = tecnologies.includes('React');
console.log(existTech); // true

// Some() - Comprueba si al menos un elemento del arreglo cumple con cierta condición.
const mayorA = numbers.some(num => num > 15);
console.log(mayorA); // true

// Find() - Devuelve el primer elemento del arreglo que cumpla la condición.
const primerMayor = numbers.find(num => num >12);
console.log(primerMayor);// 24

// Every() - Revisa que TODOS los elementos del arreglo cumplan la condición
const todosMay = numbers.every(num => num > 15);
console.log(todosMay); // false

// Reduce() - Realiza un "acumulado" iniciando desde el primer valor
// del array o desde el valor indicado.
const sumaRes = numbers.reduce( (total, numero) => numero + total, 0);
console.log(sumaRes); // 174

// ForEach() - Si agregamos un segundo parámetro en la función
// podemos acceder al índice de cada elemento del arreglo.
numbers.forEach( (num, index) => console.log(index + ': ' + num) );
/* 
 * 0: 8
 * 1: 24
 * 2: 6
 * 3: 13
 * 4: 90
 * 5: 33
*/

