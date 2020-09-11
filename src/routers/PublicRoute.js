import React from "react";
import { Route, Redirect } from "react-router";
import PropTypes from "prop-types";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    // <Route {...rest}>
    //   {isAuthenticated ? <Component /> : <Redirect to="/login" />}
    // </Route>
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
