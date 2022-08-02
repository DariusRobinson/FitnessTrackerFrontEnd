import React from "react";
import { registerUser, loginUser } from "../api";
import {storeUsername, storeToken} from '../auth'

const UserForm = ({ logInOrRegister, setLogInOrRegister }) => {
  const handleOnclick = (event) => {
    event.preventDefault();
    let currentTab = event.target.name;
    setLogInOrRegister(currentTab);

    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target.username.value)
    let username = event.target.username.value;
    let password = event.target.password.value;
    if (logInOrRegister === "Login") {
     const response = await loginUser(username, password);
      const token = response.token
    }
    if (logInOrRegister === 'Register'){
        registerUser(username, password)
    }
  };
  return (
    <>
      <div className="tab">
        <button className={`tablinks ${(logInOrRegister==='Login' ? 'active' : null)}`} name="Login" onClick={handleOnclick}>
          Login
        </button>
        <button className={`tablinks ${(logInOrRegister==='Register' ? 'active' : null)}`} name="Register" onClick={handleOnclick}>
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
