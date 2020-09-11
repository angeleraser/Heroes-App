import React from "react";
import NavBar from "../components/ui/NavBar";
import { Switch, Route, Redirect } from "react-router";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DCScreen } from "../components/dc/DCScreen";
import { Search } from "../components/search/Search";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />{" "}
      {/* NavBar not receive the history Prop because is not within a Route */}
      <>
        <Switch>
          <Route path="/marvel" component={MarvelScreen} exact />
          <Route path="/search" component={Search} exact />
          <Route path="/hero/:heroId" component={HeroScreen} exact />
          <Route path="/dc" component={DCScreen} exact />
          <Redirect to="/marvel" />
        </Switch>
      </>
    </>
  );
};
