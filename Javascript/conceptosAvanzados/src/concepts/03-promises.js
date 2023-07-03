import { heroe } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponents = (element) => {
  console.log("promiseComponents");
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderError = (error) => {
    element.innerHTML = `<h1>Error</h1> <h3>${error}</h3>   `;
  };
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  //para obtener el valor/producto de la promesa utilizamos
  findHero(id1).then(renderHero).catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  //promesas evitan el callback hell.. y creamos una promesa sin importar nada
  //el objeto Promise ya existe
  //el argumento resolve esuna funcion que tiene el valorproducto de la promise
  //el reject significa que fallamos la promesa
  const promise = new Promise((resolve, reject) => {});
  const hero = heroe.find(hero.id === id);
  //si existe el hero  mando llamar el resolve

  if (hero) {
    resove(hero);
    return;
  }
  reject(`${id} not Found`);
};
