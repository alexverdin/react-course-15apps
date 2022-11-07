// Manipulacion de objetos

const producto = {
    nombre: "tablet",
    precio: 3000,
    disponible: true
}

// Modificacion de un valor
producto.precio = 2500;
console.log(producto);// {nombre: "tablet", precio: 2500, disponible: true}

// Agregar claves directamente (sin Objet Literal Enhancement)
producto.color = "negro";
console.log(producto); //{nombre: "tablet", precio: 2500, disponible: true, color: "negro"}

// Eliminación de claves.
delete producto.precio;
console.log(producto); //{nombre: "tablet", disponible: true, color: "negro"}

// Inmutabilidad
Object.freeze(producto); // evita TODAS las modificaciones del objeto
Object.seal(producto); // permite la modificación de los valores dentro del objeto, pero evita la eliminación o agregado de claves adicionales.

