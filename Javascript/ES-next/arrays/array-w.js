export const holaMundo = () => {
  const superHeroes = [
    {
      id: 1,
      name: "batman",
    },
    {
      id: 2,
      name: "Superman",
    },
    {
      id: 3,
      name: "WW",
    },
    {
      id: 4,
      name: "Flash",
    },
  ];
  // const superHeroesCopy = [...superHeroes];
  //Aunque sea un objeto y le hacemos un spread.. aun se referencia
  //si fuese un primitivo si serian diferentes
  //en lugar de usar Spread utilizamos structured CLONE

  const superHeroesCopy = structuredClone(superHeroes);

  superHeroesCopy[0].name = "Bruce Wayne";
  console.table(superHeroes);
  console.table(superHeroesCopy);
};
