/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponents = (element) => {
  // console.log("promiseRaceComponents");

  element.innerHTML = "Loading....";
  const renderValue = (value) => {
    element.innerHTML = value;
  };
  //Podemos competir la velocidad de resolucion de varios servicios
  Promise.race([slowPromise(), midPromise(), fastPromise()]).then(renderValue);
};

//Promesas

const midPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 150);
  });
const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 100);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 3000);
  });
