"use strict";
(() => {
    //esta es la sintaxis para tipar un objeto
    let flash = {
        name: "Barry Allen",
        edad: 24,
        powers: ["Supervelocidad", "Viaje en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        // edad: 60,
        powers: ["Superfuerza"],
        getNombre() {
            return this.name;
        },
    };
    //getNombre!() nos dice que esta funcion no es null /undefined
    console.log(flash.getNombre());
})();
