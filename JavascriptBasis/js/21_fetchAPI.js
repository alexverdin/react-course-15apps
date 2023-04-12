/**
 * Hacer "fetch" consiste en consumir información de una API
 * y administrarla de la forma que más nos convenga.
 * Dos de las API más comunes para estas prácticas, es la pokeApi y JSON PlaceHolder:
 * https://pokeapi.co/
 * https://jsonplaceholder.typicode.com/
 *
 * FetchAPI reemplaza a Ajax y viene por default en el navegador.
 * Axios es una nueva librería que simplifica un poco estas llamadas a fetch.
 */

const url = " https://pokeapi.co/api/v2/pokemon/crobat";
const url2 = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const { moves, abilities } = result;
    moves.forEach((element) => {
      console.log(element);
    });

    abilities.forEach((element) => {
      console.log(element);
    });
  });
