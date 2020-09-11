const { heroes } = require("../data/heroes");

export const getHeroeByName = (name) => {
  if (name.length < 1) {
    return [];
  }
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
