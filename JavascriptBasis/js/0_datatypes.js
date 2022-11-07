// Tipos de datos en JS

// Undefined
let undefVar;

// Boolean
let boolVar = true;

// Number
let numVar = 177013;

// String
let strVar = "Esta es una cadena";

// Function
const functVar = function saludo(){
    console.log("Hola mundo.");
}

// Symbol
const symVar1 = Symbol(16)
const symVar2 = Symbol(16)

// Big Int
const bigVar = BigInt(41298374095879328749578234)

// Object
const objVar = {
    name: 'object',
    type: 'variable'
}

// Null
const nullVar = null;

console.log(typeof undefVar);
console.log(typeof boolVar);
console.log(typeof numVar);
console.log(typeof functVar);
console.log(typeof symVar1);
console.log(typeof symVar2);
console.log(symVar1 === symVar2); // false
console.log(typeof bigVar);
console.log(typeof objVar);
console.log(typeof nullVar);