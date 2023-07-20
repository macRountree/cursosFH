//ARRAYS

const arreglo = [1, 8, 2, 2, 5];
//insertar nuevo valor a arreglo al final del arreglo

arreglo.push(10);

//Arreglo se tuiliza spread con [...]
const arreglo2 = [...arreglo];

arreglo2.push(6);

const arreglo3 = arreglo2.map(function (n) {
  return n * 2;
});

arreglo3.push(14);
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
