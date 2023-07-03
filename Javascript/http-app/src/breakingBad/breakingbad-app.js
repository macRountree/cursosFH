//sintaxis mayuscula indica que es un componente

/**
 * @returns {Promise<Object>}
 */
//fetch regrresara un object .. nos ayuda a realizar peticiones http
const fetchQuote = async () => {
  //response es toda la informacion de la url
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();
  console.log(data[0]);
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBAd = async (element) => {
  //
  document.querySelector("#app-title").innerHTML = "BreakingBad App";
  element.innerHTML = "Loading . . . ";
  const quoteLabel = document.createElement("blockquote");
  const authoLabel = document.createElement("h3");
  const nextQuoteLabel = document.createElement("button");

  nextQuoteLabel.innerText = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authoLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authoLabel, nextQuoteLabel);
  };

  nextQuoteLabel.addEventListener("click", async () => {
    //cuando presionemos next quote aparecera el html loadign
    element.innerHTML = "Loading . . . ";
    //declarams un await para traernos el fetchhqueto
    const quote = await fetchQuote();

    //llamamos lafuncion con quote como argumento
    renderQuote(quote);
  });

  fetchQuote().then((data) => renderQuote(data));
};

//GET es para obtener informacion
//POST es para crear informacion
//PUT es para actualizar info (reemplazar)
//Patch es para actualizar info (parchar)
//
