import { heroe } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const CallbackComponents = (element) => {
  const id = "5d86371f1efebc31def272e2";
  const idq = "5d86371f2343e37870b91ef1";
  findHero(id, (error, heroe1) => {
    // element.innerHTML = heroe?.name || "No hay heroe";
    //evaluamos el error
    if (error) {
      element.innerHTML = error;
      return;
    }

    //mandamos otra vez la funcion find hero para otro id

    findHero(idq, (error, heroe2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${heroe1.name}/ ${heroe2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {((error: String|null, hero:Object)=>void)} callback
 */
const findHero = (id, callback) => {
  const hero = heroe.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found`);
    //declaramos return para que no se ejecute y se salga de la function
    return;
  }
  //mandamos un null
  callback(null, hero);
};
