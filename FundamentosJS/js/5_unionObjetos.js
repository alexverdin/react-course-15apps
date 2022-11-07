// Unificar dos objetos sin modificarlos
const producto = {
    nombre: "tablet",
    precio: 3000,
    disponible: true
}

const cliente = {
    nombre: "Alex",
    vip: true
}

const nuevoObj = {
    producto: {...producto},
    cliente: {...cliente}
};
console.group(producto);
console.group(cliente);
console.log(nuevoObj);
