const url = " https://pokeapi.co/api/v2/pokemon/crobat";

const consultarAsyncAwait = async () => {
  const response = await fetch(url);
  console.log("after response...");
  const result = await response;
  console.log("after result...");
  console.log(result);
};

consultarAsyncAwait();
