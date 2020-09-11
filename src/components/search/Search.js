import React from "react";
import useForm from "../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroeByName } from "../../selectors/getHeroeByName";
import { useMemo } from "react";
import { useLocation } from "react-router";
import "./css/Search.css";
export const Search = ({ history }) => {
  const [{ searchText }, handleInputValue, reset] = useForm({ searchText: "" });
  const { search } = useLocation();
  const q = search.split("=")[1] || "";
  const handleSubmit  = (e) => {
    e.preventDefault();
    reset();
    history.push(`?q=${searchText}`);
  };
  const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);
  return (
    <div className="w-full flex flex-col items-center search">
      <form autoComplete="off" onSubmit={handleSubmit} className="w-full justify-center flex">
        <input
          name="searchText"
          className="border-2"
          type="text"
          placeholder='Write a hero name...'
          value={searchText}
          onChange={handleInputValue}
        />
        <button className="" type="submit">
          Search
        </button>
      </form>
      <div className="results grid">
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
