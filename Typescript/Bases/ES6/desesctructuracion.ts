(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vsion: string;
    activo: boolean;
    poder: number;
  };
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Downey JR",
    vsion: " Paul BEttany",

    activo: true,
    poder: 1500.65464654,
  };

  //   const { poder, activo, vsion } = avengers;

  //   console.log(poder.toFixed(2), vsion.toUpperCase());

  //si queremos crear unanueva funcion y traernos a vision
  //lo mejor es crearnos un type para poder usar
  //las propiedades del objeto y pasarla como argumento con el type avengers:Avengers
  //tambien podemos desesctructurar el argumento avengers  y traernos directamente la propiedad

  const printAv = ({ ironman, ...resto }: Avengers) => {
    console.log({ ironman, resto });
  };

  //   printAv(avengers);

  const avengersArr: [string, boolean, number] = ["cap", true, 150];
  //para desesctructuracion de arreglos es con la siguiente sintax
  //si tenemos 3 argumentos, separamos los 3 con (,)
  // aunque no tengamos los 3 argumentos no dara error,
  //podemos imprimir en consola en cualquier orden
  const [cap, Bool, numero] = avengersArr;
  console.log({ cap, Bool });
})();
