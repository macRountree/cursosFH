(() => {
  enum audioLevel {
    min = 1,
    //si especificamos el valor sera enumerado dependiendo de la ubicacion
    //si en este caso mid no esta especificado su valor.. TS le da el valor siguiente
    //al valor de min... es decir si min= 1 mid sera 2 si min=2, mid sera = 3
    mid,
    max = 10,
  }

  let currentAudio = audioLevel.mid;

  console.log(currentAudio);
  console.log(audioLevel);

  //   let audioLevel = 5; //1 vol bajo 10 mas alto
})();
