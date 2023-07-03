import { heroe } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponents = async (element) => {
  // console.log("asyncAwaitComponents");
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  const id2 = "5d86371f233c9f2425f16916";

  //el await siempre estara involucrada en una function async
  //podemos desectrucutrar las promesas
  // podemos utiliza try catch para lanzar errores en el HTML
  try {
    const { name: name1 } = await findHero(id1); //Se ejecuta primero
    const { name: name2 } = await findHero(id2); // Estas 2 promesas no dependen entre si
    element.innerHTML = `${name1} / ${name2}`;
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHero = async (id) => {
  const hero = heroe.find((hero) => hero.id === id);

  if (!hero) {
    throw "Hero not found";
  }
  return hero;
};
