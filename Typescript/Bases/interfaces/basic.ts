(() => {
  //una interfaz funciona casi igual que los type solo le quitamos el =
  //no tiene participacion fisica en JS
  //la interface no define el comportamiento de la clase
  interface Hero {
    name: string;
    edad?: number;
    powers: string[];

    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    edad: 24,
    powers: ["Supervelocidad", "Viaje en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    edad: 60,
    powers: ["Superfuerza"],

    getName() {
      return this.name;
    },
  };

  // console.log(superman.name);
})();
