"use strict";
//Debemos de tratar de no USAR EL MODO ANY
(() => {
    let avenger = 123;
    let exist;
    //una constante debe estar obligatoriamente initilizade
    const power = 123;
    avenger = "Dr Strange";
    //Esto no se transpila a JS
    console.log(avenger.charAt(0));
    avenger = 15131.15165;
    //toFixed acorta los decimales que le indiquemos
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
