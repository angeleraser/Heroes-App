import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { useReducer } from "react";
import { authReducer } from "./auth/authReducer";
import { useEffect } from "react";
export const HeroesApp = () => {
  const [data, dispatch] = useReducer(authReducer, {
    currentUser: {
      name: "",
      password: "",
      email: "",
      logged: false,
    },
    users: JSON.parse(localStorage.getItem("usersRegistered")) || [],
  });
  useEffect(() => {
    localStorage.setItem("usersRegistered", JSON.stringify(data.users));
  }, [data.users]);
  return (
    <AuthContext.Provider value={{ data, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
