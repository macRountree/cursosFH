(() => {
  const batman: string = "Batman";
  const greenLantern: string = "Linterna's Verde";
  const BlackVolcan: string = `Heroe: Volcan NEgro`;
  const abc = 123;

  console.log(` i'm ${batman}, ${abc}`);

  console.log(batman.toUpperCase());

  //si batman en el caracter 11 tiene algo (?)hace el uppercase
  // podemos usar condicionales
  console.log(batman[10]?.toUpperCase() || "No esta preente");
})();
