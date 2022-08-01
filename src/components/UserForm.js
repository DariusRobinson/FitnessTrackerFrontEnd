import React from "react";
import { registerUser, loginUser } from "../api";

const UserForm = ({ logInOrRegister, setLogInOrRegister }) => {
  const handleOnclick = (event) => {
    event.preventDefault();
    let currentTab = event.target.name;
    setLogInOrRegister(currentTab);

    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.username.value)
    let username = event.target.username.value;
    let password = event.target.password.value;
    if (logInOrRegister === "Login") {
      loginUser(username, password);
    }
    if (logInOrRegister === 'Register'){
        registerUser(username, password)
    }
  };
  return (
    <>
      <div className="tab">
        <button className="tablinks" name="Login" onClick={handleOnclick}>
          Login
        </button>
        <button className="tablinks" name="Register" onClick={handleOnclick}>
          Register
        </button>
      </div>
      <div id="userForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" placeholder="Username" />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" placeholder="Password" />
          <button name="user" type="submit">
            {logInOrRegister}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
