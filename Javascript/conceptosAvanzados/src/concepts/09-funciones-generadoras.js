import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const functionGenComponents = (element) => {
  // console.log("functionGenComponents");

  const genId = idGenerator();
  const button = document.createElement("button");

  button.innerText = "Click";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();

    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let cunrrentId = 0;
  while (true) {
    yield `2023-${++cunrrentId}`;
  }
}

//Funcion generadora se utilza en la siguiente sintax

function* myFirstGenerationFunction() {
  //yield es como un return pero se pausa la funcion
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";

  return "No hay mas valores";

  yield "Ya no se puede hacer naaa";
}
