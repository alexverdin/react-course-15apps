// Ternarios

const isMember = false;
const balance = 800;
const debt = 600;

// Ternario Simple
console.log("La Cuota es de:  " + (isMember ? "$20.00 (member)" : "$100.00 (not member)") );


// Doble Ternario
balance > debt ? // ternario (A)
    console.log("puede pagar con saldo") : // expresión true (A)
    isMember ? // expresión si false (ternario (B))
        console.log("Los miembros no pagan") : // expresión true (B)
        console.log("saldo insuficiente") // expresión false (B)

