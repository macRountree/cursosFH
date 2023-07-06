(() => {
  //lastName? significa que puede ser un argumnto opcional
  //en este caso no nos dara error si mandamos solo 1
  const fullName = (firstNAme: string, lastName?: string): string => {
    //NO OCUPAMOS VALiDAD de esta manera
    /* if(!firistNAME){
          th
      } */
    return `${firstNAme} ${lastName || "no Last Name"} `;
  };

  let noName: string;
  //Debemos poner obligatoriamente la cantidad de argumentos declarados en la funcion
  const name = fullName("Tony");

  console.log({ name });
})();
