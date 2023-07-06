"use strict";
(() => {
    //TS ya infiere que son un arreglo de numeros
    //SI asignamos un string dentro de los valores del arreglo
    //tomara la variable como number ||string
    const numbers = [1, 2, 3, 4, 5, "6", 8, 7, 42];
    //TS hace un warning para booleanos, para eso podemos declarar numbers ||booleanos
    //aunque si inyecta el true en el arreglo
    numbers.push(true);
    console.log(numbers);
    //======================0000000
    const villian = ["Omega Rojo", "Dormamu", "Venom", "Kraven"];
    villian.forEach((v) => console.log(v.toUpperCase()));
})();
