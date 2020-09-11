import { heroes } from "../data/heroes";
export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.some((p) => p === publisher)) {
    throw new Error(
      `Publisher "${publisher}" is not found. Did you mean: ${validPublishers.join(
        ","
      )}`
    );
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
