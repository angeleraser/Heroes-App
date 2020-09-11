import React from "react";
import "./css/Login.css";
import { LoginForm } from "./LoginForm";
export const Login = ({ history }) => {
  return (
    <div className="w-full login-screen items-center flex flex-col">
      <h1 className=" w-full">Heroes App</h1>
      <LoginForm />
    </div>
  );
};
