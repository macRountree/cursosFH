const miPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tenemos un valor");
    }, 1000);
  });
};

//una funcion asyncrona puede retornan una promesa

const medirTiempoAs = async () => {
  console.log("inicio");
  // await miPromise().then(console.log);
  console.log("FIN");
  //cuando se resuelve nuestra promesa se usa return si no se resuele se lanza e throws
  throw "Error en medir tiempo";
};

medirTiempoAs()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
