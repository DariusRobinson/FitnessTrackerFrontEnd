import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Profile, Routines, Activities } from "./";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null)
  return (
    <>
      <Router>
        <header>
          <Header setCurrentUser={setCurrentUser}/>
        </header>

        <Routes>
          <Route exact path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
