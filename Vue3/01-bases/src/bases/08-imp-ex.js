// console.log(heroes);

import superHeroes from "../data/heroes";

// import superHeroes from "./data/heroes";

export const getHeroById = (id) => {
  return superHeroes.find((hero) => hero.id === id);
};

// console.log(getHeroById(2));
export const getHeroByOwner = (owner) => {
  return superHeroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroByOwner("DC"));

// // console.log(heroes);

// import { getHeroById, getHeroByOwner } from "./bases/08-imp-ex";

// console.log(getHeroById(2));

// console.log(getHeroByOwner("DC"));
