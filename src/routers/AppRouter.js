import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "../components/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext);
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            exact
            isAuthenticated={currentUser.logged}
            path="/login"
            component={Login}
          />
          {/* To render only custom routes  */}
          <PrivateRoute
            isAuthenticated={currentUser.logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </>
    </Router>
  );
};
