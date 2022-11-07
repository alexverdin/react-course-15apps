// Destructuring de 2 o más objetos.

const producto = {
    nombre: "tablet",
    precio: 3000,
    disponible: true
}

const cliente = {
    nombre: "Alex",
    vip: true
}

// Para destructurar una propiedad con nombre repetido,
// es necesario usar "alias".
const {nombre, precio, disponible} = producto;
const {nombre: nombreCliente, vip} = cliente;

console.log(nombre); // tablet
console.log(nombreCliente); // Alex