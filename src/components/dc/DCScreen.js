import React from "react";
import { HeroList } from "../heroes/HeroList";
import "./css/DCScreen.css";
export const DCScreen = () => {
  return (
    <div className="w-full flex dc-screen flex-col items-start"> 
      <h1 className="text-4xl">DC Heroes</h1>
      <HeroList publisher={"DC Comics"} />
    
    </div>
  );
};
