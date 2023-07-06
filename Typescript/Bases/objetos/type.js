"use strict";
(() => {
    //establecemos el tipo en este objeto en este caso es hero
    let flash = {
        name: "Barry Allen",
        edad: 24,
        powers: ["Supervelocidad", "Viaje en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        edad: 60,
        powers: ["Superfuerza"],
        getName() {
            return this.name;
        },
    };
})();
