import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import { validateInputEntries } from "../../validators/validateInputEntries";

export const LoginForm = () => {
  const [action, setAction] = useState("Login");
  const [invalid, setInvalid] = useState(false);
  const dispatchAction = ({ target: { textContent } }) => {
    setAction(textContent);
    invalid && setInvalid(false);
    reset();
  };
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [formValues, handleInputVal, reset] = useForm({
    name: "",
    password: "",
    email: "",
  });
  const { name, password, email } = formValues;
  const handleInputValue = (e) => {
    handleInputVal(e);
    invalid && setInvalid(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const usersRegistered =
      JSON.parse(localStorage.getItem("usersRegistered")) || [];
    const lastpath = localStorage.getItem("lastPath") || "/";
    switch (action) {
      case "Login":
        const user = usersRegistered.find((user) => user.name === name);
        // Validates if the user exist
        if (user) {
          if (user.password !== password || user.name !== name) {
            setInvalid(true);
          } else {
            // Dispatch if the user is found in the local storage
            dispatch({
              type: types.login,
              payload: {
                ...user,
              },
            });
            history.push(lastpath);
          }
        } else {
          setInvalid(true);
        }
        break;
      case "Register":
        if (usersRegistered.some((u) => u.name === name || u.email === email)) {
          setInvalid(true);
        } else {
          if (validateInputEntries(formValues)) {
            dispatch({
              type: types.register,
              payload: {
                name,
                email,
                password,
                id: new Date().getTime(),
              },
            });
            history.push(lastpath);
          } else {
            setInvalid(true);
          }
        }
        break;
      default:
        break;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={`login-form flex flex-col items-center w-full   ${
        invalid ? "invalid" : ""
      }`}>
      <div
        className={`options-bar w-full flex items-stretch justify-between 
        }`}>
        <button
          className={`${action === "Login" ? "active" : ""}`}
          onClick={dispatchAction}
          type="button">
          Login
        </button>
        <button
          className={`${action === "Register" ? "active" : ""}`}
          onClick={dispatchAction}
          type="button">
          Register
        </button>
      </div>
      {action === "Login" && invalid ? (
        <p className="invalid-msg">Incorrect username or password</p>
      ) : null}
      <label className="w-full flex-col flex items-start" htmlFor="name">
        <h2>Username</h2>
        <input
          value={name}
          onChange={handleInputValue}
          type="text"
          name="name"
          required
        />
      </label>
      {action === "Register" ? (
        <label className="w-full flex-col flex items-start" htmlFor="name">
          <h2>Email</h2>
          <input
            value={email}
            onChange={handleInputValue}
            type="text"
            required
            name="email"
            placeholder="email@example.com"
          />
        </label>
      ) : null}
      <label className="w-full flex-col flex items-start" htmlFor="password">
        <h2>Password</h2>
        <input
          value={password}
          onChange={handleInputValue}
          type="password"
          name="password"
          required
        />
      </label>
      <button type="submit">{action === "Login" ? "Login" : "Sign up"}</button>
    </form>
  );
};
