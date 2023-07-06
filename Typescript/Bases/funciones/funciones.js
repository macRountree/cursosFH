"use strict";
(() => {
    const hero = "Flash  ";
    //Recomendable especificar el valor de hero en esta funcion name
    function returnName() {
        //si declaramos number return da error y se corrige aquimismo en la funct
        return hero;
    }
    const activateSignal = () => {
        return "Batiseñal";
    };
    //Devuelve function en el navegador
    console.log(typeof activateSignal);
    const heroName = returnName();
})();
