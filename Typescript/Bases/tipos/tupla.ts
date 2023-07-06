(() => {
  const heroe: [string, number, boolean] = ["Dr Strange", 10, true];
  //Como tenemos definido que siempre el primer dato sera un string
  //y el segundo dato un number ... al inyectar datos al arreglo debe ser de la misma manera
  // JS si acepta esto pero TS marcara errores
  heroe[1] = 50;
  heroe[0] = "Ironman";
  heroe[2] = false;
  console.log(heroe);
})();
