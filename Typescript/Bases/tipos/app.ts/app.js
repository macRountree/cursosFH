"use strict";
(() => {
    const batman = "Bruce";
    console.log(batman);
    const superman = "Clark";
    const existe = false;
    console.log(existe);
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
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
    function activar_batiseñal() {
        return "activada";
    }
    activar_batiseñal();
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map