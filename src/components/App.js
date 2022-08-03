import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Profile, Routines, Activities } from "./";
import { grabToken, grabUser } from "../auth";



const App = () => {
    const [currentUser, setCurrentUser] = useState(grabUser());
    const [allActivities, setAllActivities] = useState([]);
    const [token, setToken] = useState(grabToken());
  return (
    <>
      <Router>
        <header>
          <Header setToken={setToken} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </header>

        <Routes>
          <Route exact path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} setToken={setToken}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/activities" element={<Activities allActivities={allActivities} setAllActivities={setAllActivities} token={token} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
