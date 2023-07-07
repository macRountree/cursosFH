"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        edad: 24,
        powers: ["Supervelocidad", "Viaje en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        powers: ["Superfuerza"],
        getNombre() {
            return this.name;
        },
    };
    console.log(flash.getNombre());
})();
//# sourceMappingURL=objetos.js.map