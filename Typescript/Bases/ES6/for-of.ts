(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };
  const cap: Avenger = {
    name: "Cap. America",
    weapon: "Escudo Vibranium",
  };
  const Thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, Thor, cap];

  // por cada iterador (ironman,thor,cap) en avengers imprime avenger
  for (const avenger of avengers) {
    console.log(avenger.weapon);
  }
})();
