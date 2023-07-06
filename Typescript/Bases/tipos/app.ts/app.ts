(() => {
  // Tipos
  const batman: string = "Bruce";
  console.log(batman);

  const superman: string = "Clark";

  const existe: boolean = false;
  console.log(existe);

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum fuerzaJusticeLeague {
    fuerzaAcuaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
  }
  const fuerzaAcuaman: number = fuerzaJusticeLeague.fuerzaAcuaman;
  const fuerzaBatman: number = fuerzaJusticeLeague.fuerzaBatman;
  const fuerzaFlash: number = fuerzaJusticeLeague.fuerzaFlash;
  const fuerzaSuperman: number = fuerzaJusticeLeague.fuerzaSuperman;
  console.log(fuerzaJusticeLeague);

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }
  activar_batiseñal();

  function pedir_ayuda() {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any | string = "100";
  const largoDelPoder: number = (poder as String).length;
  console.log(largoDelPoder);
})();
