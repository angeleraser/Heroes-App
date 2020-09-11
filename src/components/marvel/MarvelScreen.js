import React from "react";
import { HeroList } from "../heroes/HeroList";
import './css/MarvelScreen.css'
export const MarvelScreen = () => {
  return (
    <div className="w-full flex marvel-screen flex-col items-start">
      <h1>Marvel Heroes</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
