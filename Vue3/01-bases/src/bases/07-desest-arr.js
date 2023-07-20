/*
DESESTRUCTURACION DE ARREGLOS
*/

const characters = ["Goku", "Vegeta", "Trunks"];

/*DESESTRUCTURAMOS EL ARREGLO 
el orden de la desesctruturacion  es importante

si queremos  solamente a trunks dejamos en blanco la posicion de goku y vegeta
*/

const [, , trunks, goten = "goten"] = characters;

console.log(goten);

console.log(characters);

/*DESESTRUCTURACION DE ARREGLS EN FUNCIONES */

const returnArr = () => {
  return ["ABOCa", 123];
};

const [letras, number] = returnArr();

console.log(letras, number);
