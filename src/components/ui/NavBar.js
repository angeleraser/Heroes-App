import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./css/NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
const NavBar = () => {
  const {
    data: { currentUser },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: types.logout });
    history.replace("/login");
  };

  return (
    <nav className="w-full nav-bar">
      <ul className="w-full">
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/marvel">Marvel Heroes</NavLink>
        </li>
        <li>
          <NavLink to="dc">DC Heroes</NavLink>
        </li>
        <li className="login-info flex items-center">
          <p className="user-name flex items-center">{currentUser.name}</p>
          <button onClick={handleLogout}> Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
