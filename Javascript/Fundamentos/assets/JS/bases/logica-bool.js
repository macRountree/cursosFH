const regresaTrue = () => {
  console.log("Regresa True");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
};

console.warn("negacion");
//Se niega con !
console.log(!true);

console.log(!regresaFalse());

console.log("AND"); //True si todos son verdaderos

console.log(true && false); //False si no todos son verdaderos
console.log(regresaFalse() && regresaTrue()); //false
regresaFalse() && regresaTrue();

console.log("OR");
