import React from "react";

export const Login = ({ onSubmit }) => {
  return (
    <form className="sign-up" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <div className="inputs">
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="pass" placeholder="Password" />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};
