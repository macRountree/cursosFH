import { shuffle } from "underscore";

/**
 *
 * @param {Array<String>} tiposCarta
 * @param {Array<String>} especiales
 * @returns {Array<String>}
 */
export const crearDeck = (tiposCarta, tespeciales) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error("tiposCarta es obligatorio");
  if (!tespeciales || tespeciales.length === 0)
    throw new Error("tespeciales es obligatorio");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposCarta) {
    for (let esp of tespeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = shuffle(deck);
  console.log(deck);
  return deck;
};
