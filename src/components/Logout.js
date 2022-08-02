import React from "react";
import { clearUsernameAndToken, storeToken } from "../auth";

const Logout = ({ setCurrentUser, currentUser, setToken }) => {
  const handleOnclick = (event) => {
    event.preventDefault();
    clearUsernameAndToken();
    setCurrentUser(null);
    setToken("");
    console.log(currentUser, "current user");
  };

  return <button onClick={handleOnclick}>Logout</button>;
};

export default Logout;
