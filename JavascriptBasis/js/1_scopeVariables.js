// Scope de las variables

// Local Scope
function blockVar() {

    const count = 5;

    for(var i = 0; i < count; i++  ) {
        console.log(i); // 0 1 2 3 4
    }

    console.log(i); // 5 (scope local)

}

// Block Scope
function blockLet() {

    const count = 5;

    for(let i = 0; i < count; i++  ) {
        console.log(i); // 0 1 2 3 4
    }

    console.log(i); // error (scope de bloque)

}

blockVar();
console.log('-----')
blockLet();