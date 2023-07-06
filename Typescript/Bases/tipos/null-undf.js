"use strict";
(() => {
    //undefinedy null no permiten tipar ningun otro valor primitivo que no sea el mismo
    //a menos que sea doble tipado
    //Debemos enfocarnos que TS sea mas estricto y no usar esta practica
    let nada = undefined;
    console.log(nada);
})();
