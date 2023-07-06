"use strict";
(() => {
    //REST o de argumentos se atrapan con el operador ...restArgs
    //...restArgs debemos especificarle el tipo si no arrojara Any[]
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    //al utiilizar Rest args (con su declarasion de valor) podemos poner todos los argumentos que qerams
    const superman = fullName("Clark", "Joseph", "kent", "Rountree");
    console.log({ superman });
})();
