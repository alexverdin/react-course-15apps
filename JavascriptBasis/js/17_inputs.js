// 

// todos los selectores de CSS pueden ser utilizados por query selector (type, class, etc.)

const inputNombre = document.querySelector('.nombre');

// evento input: captura borrado, pegado y escritura
inputNombre.addEventListener('input', (e)=> {
    console.log(e.target.value)
})


const inputPasswd = document.querySelector('.password');

inputPasswd.addEventListener('input', functionPasswd);

function functionPasswd(){
    inputPasswd.type = 'text'

    setTimeout(()=>{
        inputPasswd.type = 'password'
    }, 200)
}

/*
// evento keydown: captura cuando se presiona una tecla
inputNombre.addEventListener('keydown', ()=>{
    console.log("eventListener: keydown")
})

// evento keyup: captura cuando se suelta una tecla
inputNombre.addEventListener('keyup', ()=>{
    console.log("eventListener: keyup")
})
*/