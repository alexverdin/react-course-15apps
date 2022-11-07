// Objetos en JS

// declaración de objetos
const nuevoObjeto = {
    nombre: "taza",
    material: "metal",
    color: "blanco",
    radio: 6
}
console.table(nuevoObjeto); // {nombre: "taza", material: "metal", color: "blanco", radio: 6}
console.log(nuevoObjeto.color); // "blanco"

// destructuring de objetos
const {material, color, radio} = nuevoObjeto; // se "extraen" la o las variables indicadas del objeto, junto con su valor.
console.log(material); // "metal". (La nueva variable trabaja como cualquier otra variable).
console.log(radio); // 6
console.log(typeof color); // String. (El tipo de la variable depende de su valor).
console.log(typeof radio); // number

// Object Literal Enhancement
const auth = true;
const owner = "Alex";

const newObject = {
    auth: auth,
    owner: owner
}
console.table(newObject);

const newObject2 = {
    auth,
    owner
}
console.table(newObject2);