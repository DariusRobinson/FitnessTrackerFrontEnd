import React from "react";
import { clearUsernameAndToken} from "../auth";

const Logout = ({ setCurrentUser, setToken }) => {
  const handleOnclick = (event) => {
    event.preventDefault();
    clearUsernameAndToken();
    setCurrentUser(null);
    setToken("");
  };

  return <button className="genButton" onClick={handleOnclick}>Logout</button>;
};

export default Logout;
