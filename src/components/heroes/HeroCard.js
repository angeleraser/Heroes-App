import React from "react";
import './css/HeroCard.css'
import { Link } from "react-router-dom";
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Link to={`/hero/${id}`} className="flex relative hero-card items-start flex-col">
      <img
        className="inline-block  w-full h-full"
        src={`./src/heroes/${id}.jpg`}
        alt={superhero}
      />
      <h2 className="font-bold name">{superhero}</h2>
    </Link>
  );
};
