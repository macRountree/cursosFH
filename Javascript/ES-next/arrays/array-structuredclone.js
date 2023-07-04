export const holaMhndo = () => {
  const state = [
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

  const index = 1;
  const newName = "GLanter";

  // const newState = state.map((hero, i) => {
  //   if (i === index) {
  //     hero.name = newName;
  //   }
  //   return { ...hero };
  // });

  //with nos ayda a crear uun nuevo arreglo y alavez modificarlo

  const newState = state.with(index, {
    ...state.at(index),
    id: 100,
    name: newName,
  });

  state[0].name = "Volcan Negro";
  console.log(newState);
};
