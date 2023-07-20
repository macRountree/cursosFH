// =============PROMESAS ===================

// console.log("Inicio");

//primero se resuelve todo el archivo despues el then
/*PROMESAS SIRVEN PARA

  Con peticiones async que van a llegar de un servidor
  traer info hacer un post , actualizacion del lado del serv.
  carga de iagenes ,, cualquier cosa que vaya a otro lugar y luego regresa

*/

// new Promise((resolve, reject) => {
//   console.log("Cuerpo Promesa");

//   resolve("Promesa Resuelta"); //si se resuelve.. se activa el .then y no catch
//   reject("promesa vv"); //si se reject se activa el .catch y no el .then
// })
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// console.log("FIN");

import getHeroById from "./bases/08-imp-ex";

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      }
      reject(hero);
    }, 1000);
  });
};

getHeroByIdAsync(1)
  .then((h) => console.log(h))
  .catch(console.log);
