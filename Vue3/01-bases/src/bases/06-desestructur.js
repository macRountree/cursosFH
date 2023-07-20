// DESESTRUCTURACION DE OBJETOS ================

const person = {
  name: "Tony",
  age: 45,
  codeName: "ironman",
};

// asi desestructuramos un objeto
/* creamos una constante con llaves y la igualamos al objeto
  dentro ponemos los valores de ese objeto
  si ponemos power pero no esta declarado dentro del objeto imprimira
  udefined
*/

const { name, age, codeName, power = "No poderes" } = person;

// console.log(name, age, codeName, power);

// ==========DESESTRUCTURACION DE FUNCIOES ==========

const createHero = ({ name, age, codeName, power }) => {
  //en lugar de declarar aqui la desestructuracion podemos mandarlos como arg
  // const { name, age, codeName, power } = person;

  return {
    id: 6351351,
    //si el valor y la llave tienen el mismo nombre podemos solo dejar un name
    name,
    age,
    codeName,
    power,
  };
};
const crearteHero = ({ name, age, codeName, power }) =>
  /*Podemos reducir mas el codigo quitando el return y las llaves conla
   siguiente sintaxis
  */

  ({
    id: 6351351,
    //si el valor y la llave tienen el mismo nombre podemos solo dejar un name
    name,
    age,
    codeName,
    power,
  });

console.log(crearteHero(person));
