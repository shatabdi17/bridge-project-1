import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, handleLogin, username }) => (
  <section className="login-card">
    <h2>Please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
      required="true"
    />
    <Button value="Login" handleClick={handleLogin} />
  </section>
);
