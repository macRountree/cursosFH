"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    console.log(batman);
    const superman = "Clark";
    const existe = false;
    console.log(existe);
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let fuerzaJusticeLeague;
    (function (fuerzaJusticeLeague) {
        fuerzaJusticeLeague[fuerzaJusticeLeague["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerzaJusticeLeague[fuerzaJusticeLeague["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzaJusticeLeague[fuerzaJusticeLeague["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzaJusticeLeague[fuerzaJusticeLeague["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerzaJusticeLeague || (fuerzaJusticeLeague = {}));
    const fuerzaAcuaman = fuerzaJusticeLeague.fuerzaAcuaman;
    const fuerzaBatman = fuerzaJusticeLeague.fuerzaBatman;
    const fuerzaFlash = fuerzaJusticeLeague.fuerzaFlash;
    const fuerzaSuperman = fuerzaJusticeLeague.fuerzaSuperman;
    console.log(fuerzaJusticeLeague);
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    activar_batiseñal();
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
