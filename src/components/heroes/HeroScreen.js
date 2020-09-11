import React from "react";
import { useParams, Redirect, useHistory } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";
import "./css/HeroScreen.css";
import { useMemo } from "react";
export const HeroScreen = () => {
  const { heroId } = useParams(); // to find the current param in the url
  const { goBack, length, push } = useHistory();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const handleReturn = () => {
    if (length <= 2) {
      push("/");
    } else {
      goBack();
    }
  };
  if (!hero) {
    return <Redirect to="/marvel" />;
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div className="flex hero-screen flex-col w-full items-center">
      <button onClick={handleReturn}>Back</button>
      <div className="info w-full grid">
        <img
          className="animate__animated animate__slideInLeft"
          src={`../src/heroes/${heroId}.jpg`}
          alt={superhero}
        />
        <h2 className="w-full">{superhero}</h2>
        <ul className="w-full flex flex-col">
          <li>
            Publisher: <span>{publisher}</span>
          </li>
          <li>
            Alter ego: <span> {alter_ego}</span>
          </li>
          <li>
            First appearance: <span>{first_appearance}</span>
          </li>
          <li>
            Characters: <span>{characters}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
