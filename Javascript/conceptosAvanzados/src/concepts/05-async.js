import { heroe } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponents = (element) => {
  const id = "5d86371f233c9f2425f16912";

  console.log("Inicio de componente");

  findHero(id)
    .then((name) => (element.innerHTML = name))
    // .then(({ name }) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));

  console.log("Fin del componente");

  // console.log("asyncComponents");
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
//asyn transforma mi funcion a  promesa y resuelve lo declarado en return (hero)
//Asyn no sigue el hilo
//un return en un async significa que todo salio sin errores
const findHero = async (id) => {
  const hero = heroe.find((hero) => hero.id === id);
  if (!hero) throw `Hero withd id ${id} not found`;
  return hero.name;
};
