// DOM Events - Submit

const formulario = document.querySelector('#formulario')

//Se ejecuta un evento de tipo submit
formulario.addEventListener('submit', e => {
    e.preventDefault(); // evita que el evento 'submit' se ejecute.

    const nameForm = document.querySelector('.nombre').value;
    const passwdForm = document.querySelector('.password').value;

    if(nameForm === '' || passwdForm === ''){
        console.log("Todos los campos son obligatorios")
    } else {
        console.log("Enviando...")
    }

})
