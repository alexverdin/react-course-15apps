// Condicionales y operadores lógicos


// IF - ELSE
const num = 6;
const card = true;

if(num > 5){
	console.log(`"num" is bigger than 5`);
} else {
	console.log(`"num" is lower than 5`);
}

// COMPARADORES
// Comparación no-estricta
if(1 == "1"){
    console.log("true");
} else {
    console.log("false");
} // TRUE

// Comparación estricta
if(1 === "1"){
    console.log("true");
} else {
    console.log("false");
} // FALSE


// OPERADORES LÓGICOS
// AND
if (num > 0 && num < 6){
    console.log("num is positive and lesser than 6");
} else {
    console.log("num AND else");
}

// OR
if (num > 0 || card){
    console.log("num is positive or card is true");
} else {
    console.log("num negative + card is false");
}
