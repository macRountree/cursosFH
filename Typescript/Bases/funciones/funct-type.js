"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const ssaveTheWorld = () => "El mundo esta salvado";
    //?declaramos que una funcion reciba un solo valor lo asignamos de la
    //?siguiente manera .. y solo aceptara numeros en este caso
    //?tambien debemos asignar el tipo de valor para cada argumento
    //?no importa el nombre que le demos a estos args
    //?  let myFunction: (x: number, y: number) => number;
    /*
    
    =========
    
    */
    //*en el caso de greet debemos asignar string para que no
    //*marque error
    //  *let myFunction: (x: string) => string;
    //!en el caso de save dethword lo dejamos sin argumentos
    let myFunction;
    //   myFunction = 10;
    //   console.log(myFunction);
    //   myFunction = addNumber;
    //   console.log(myFunction(1, 2));
    //  * myFunction = greet;
    //   *console.log(myFunction("Mac"));
    myFunction = ssaveTheWorld;
    console.log(myFunction());
})();
