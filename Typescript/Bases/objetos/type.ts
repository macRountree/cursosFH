(() => {
  //type es una privateword para definir un tipo
  //no existe su contraparte en JS  y obliga a tipar un objeto
  type Hero = {
    //si cambiamos el tipado de una propiedad. .ns dara error en otros objetos
    name: string;
    edad?: number;
    powers: string[];
    getName?: () => string;
  };

  //establecemos el tipo en este objeto en este caso es hero
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
})();
