import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Profile, Routines, Activities, WrongPage, UserPage } from "./";
import { grabToken, grabUser } from "../auth";
import { getAllActivities } from "../api";


const App = () => {
  const [currentUser, setCurrentUser] = useState(grabUser());
  const [allActivities, setAllActivities] = useState([]);
  const [token, setToken] = useState(grabToken());
  const [allRoutines, setAllRoutines] = useState([]);


  const fetchActivities = async () => {
    const activityList = await getAllActivities();
    console.log(activityList, "this is the activity list");
    setAllActivities(activityList);
  };

  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact path="/" element={<Header setToken={setToken}currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>

            <Route index element={ <Home currentUser={currentUser} setCurrentUser={setCurrentUser} setToken={setToken} /> } />

            <Route path="/profile" element={<Profile token={token} currentUser={currentUser} allRoutines={allRoutines} allActivities={allActivities} setAllRoutines={setAllRoutines} />} />

            <Route path="/routines" element={ <Routines currentUser={currentUser} token={token} allRoutines={allRoutines} setAllRoutines={setAllRoutines} allActivities={allActivities}/> } />
            <Route path="/routines/:username" element={ <UserPage currentUser={currentUser} token={token} allRoutines={allRoutines} setAllRoutines={setAllRoutines} /> } />


            <Route path="/activities" element={ <Activities allActivities={allActivities} setAllActivities={setAllActivities} token={token} currentUser={currentUser}/> } />
          </Route>

          <Route path="*" element={<WrongPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
