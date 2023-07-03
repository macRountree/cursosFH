/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncDosComponents = async (element) => {
  // console.log("asyncDosComponents");
  console.time("Start");
  // const value1 = await slowPromise();
  // const value2 = await midPromise();
  // const value3 = await fastPromise();

  //llamamos todas nuestras promesas all
  //Promise.all espera a que cada una de las promesas se resuelva
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    midPromise(),
    fastPromise(),
  ]);

  //colocamos en html

  element.innerHTML = `
  
  
  value1: ${value1} <br>
  value2: ${value2}<br>
  value3: ${value3}<br>
  
  `;

  console.timeEnd("Stop");
};

const midPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mid Promise");
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
      resolve("Fast Promise");
    }, 3000);
  });
