(() => {
  //el never significa que mi funcion not ermina exitosamente
  // si especificamos el argumento como string y lo llamamos afuera
  const error = (msg: string): never | number => {
    //si no se ejecuta este bloque false.. si se aplica el hola mundo
    if (false) {
      throw new Error(msg);
    }
    //podemos poner doble especificacion de number para que acepte return 1
    return 1;
  };
  error("Aux");
  //   ya no se ejecutara el hola mundo
  console.log("Hola mundo");
})();
