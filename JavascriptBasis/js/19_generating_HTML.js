// Construyendo HTML con JS

const formulario = document.querySelector("#formulario"); // ID: formulario

//Al ejecutarse un evento de tipo submit en el HTML se ejecuta lo siguiente:
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que el evento 'submit' se ejecute.

  const nameForm = document.querySelector(".nombre").value; //clase: nombre
  const passwdForm = document.querySelector(".password").value; //clase: password

  const alertaPrevia = document.querySelector(".alerta"); //clase: alerta
  if (alertaPrevia) {
    alertaPrevia.remove();
  }

  const alerta = document.createElement("DIV");
  alerta.classList.add("alerta");

  if (nameForm === "" || passwdForm === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("error");
  } else {
    alerta.textContent = "Enviando...";
    alerta.classList.add("exito");
  }

  formulario.appendChild(alerta);
  console.log(alerta);
});
