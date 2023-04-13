const url = " https://pokeapi.co/api/v2/pokemon/pikachu";
const url2 = " https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  const inicio = performance.now();

  const response = await fetch(url);
  const result = await response.json();

  const response2 = await fetch(url2);
  const result2 = await response2.json();

  const fin = performance.now();

  console.log(`1er Async: ${fin - inicio}ms`);
  console.log(result);
  console.log(result2);
};

const consultarAPI2 = async () => {
  const inicio = performance.now();

  const [resp, resp2] = await Promise.all([fetch(url), fetch(url2)]);
  const result = await resp.json();
  const result2 = await resp2.json();

  const fin = performance.now();

  console.log(`2do Async: ${fin - inicio}ms`);
  console.log(result);
  console.log(result2);
};

consultarAPI();
consultarAPI2();
