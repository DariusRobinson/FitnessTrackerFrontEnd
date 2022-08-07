import React, { useState } from "react";
import UserForm from "./UserForm";

const Home = ({currentUser, setCurrentUser, setToken}) => {
    const [logInOrRegister, setLogInOrRegister] = useState('Login')
    
  return (
    <>
    <div id="userFormContainer">
      <div className="tabcontent">
        {currentUser ? <h1 className="homepage">Welcome back, {currentUser}</h1> : <UserForm logInOrRegister={logInOrRegister} setLogInOrRegister={setLogInOrRegister} setCurrentUser={setCurrentUser} setToken={setToken}/>}
      </div>
      </div>
    </>
  );
};

export default Home;
