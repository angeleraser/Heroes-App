import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind/tailwind.output.css";
import { HeroesApp } from "./HeroesApp";
import "animate.css";
const ROOT = document.getElementById("root");
const App = () => {
  return (
    <>
      <HeroesApp />
    </>
  );
};

ReactDOM.render(<App />, ROOT);
