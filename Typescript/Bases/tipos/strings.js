"use strict";
(() => {
    var _a;
    const batman = "Batman";
    const greenLantern = "Linterna's Verde";
    const BlackVolcan = `Heroe: Volcan NEgro`;
    const abc = 123;
    console.log(` i'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    //si batman en el caracter 11 tiene algo (?)hace el uppercase
    // podemos usar condicionales
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta preente");
})();
