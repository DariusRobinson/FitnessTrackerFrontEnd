import React, { useState } from "react";
import UserForm from "./UserForm";

const Home = () => {
    const [logInOrRegister, setLogInOrRegister] = useState('Login')
    
  return (
    <>
    <div id="userFormContainer">
      <div className="tabcontent">
        <UserForm logInOrRegister={logInOrRegister} setLogInOrRegister={setLogInOrRegister}/>
      </div>
      </div>
    </>
  );
};

export default Home;
