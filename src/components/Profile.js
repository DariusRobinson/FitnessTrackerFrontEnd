import React, { Fragment, useEffect, useState } from "react";
import { getUserInfo, getPublicRoutinesByUser } from "../api";
import {DeleteRoutine, EditRoutine} from './'

const Profile = ({ token, currentUser, allRoutines  }) => {
    const [myRoutines, setMyRoutines] = useState([])
    const [editRoutineActive, setEditRoutineActive] = useState(null);

    const getMyRoutines = async () =>{
        const allUserRoutines = await getPublicRoutinesByUser(token, currentUser) 
        setMyRoutines(allUserRoutines)
        console.log(myRoutines, 'this is what we got')
    } 
    useEffect(() =>{
        getMyRoutines()
    },[])
    const handleOnClick = async () => {
    const response = await getUserInfo(token);

    let userId = response.id;
    let username = response.username;
    alert(`Currently logged in is ${username}.
Your id is ${userId}!`);
  };

  return (
    <>
    
      <h1>Welcome back! Here's a list of all your Routines</h1>
      <button onClick={handleOnClick}>Get user info!</button>
      <br/>
      {myRoutines && myRoutines.length ? 
      <div>
        {myRoutines.map((element, index) => {
          let routineId = element.id;
          return (
            <div key={index} className="routines">
              <p className="routineCreator">Created By: You</p>
              <p className="routineName">{`Routine: ${element.name}`}</p>
              <p className="routineGoal">{`Goal: ${element.goal}`}</p>
              {element.activities ? (
                element.activities.map((activity, activityIdx) => {
                  return (
                    <Fragment key={activityIdx}>
                      <p className="">{`Activity: ${activity.name}`}</p>
                      <p className="">{`Activity Description :${activity.description}`}</p>
                      <p className="">{`Reps:${activity.count}`}</p>
                      <p className="">{`Duration: ${activity.duration} interval of time that you feel the burn!`}</p>
                    </Fragment>
                  );
                })
              ) : (
                <></>
              )}
              {!editRoutineActive ? (
                <Fragment>
                <button
                  onClick={() => {
                    console.log(routineId, "routine id");
                    setEditRoutineActive(routineId);
                  }}
                >
                  Edit Routine
                </button>
                <DeleteRoutine token={token} routineId={routineId} myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
                </Fragment>
              ) : (
                <></>
              )}

              {editRoutineActive === routineId ? (
                <Fragment>
                  <EditRoutine
                    editRoutineActive={editRoutineActive}
                    setEditRoutineActive={setEditRoutineActive}
                    name={element.name}
                    goal={element.goal}
                    token={token}
                    routineId={routineId}
                    myRoutines={myRoutines} setMyRoutines={setMyRoutines}
                  />
                  <button className="cancelEditRoutine" onClick={()=>{
                    setEditRoutineActive(null)
                  }}>Cancel</button>
                </Fragment>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      : <>Go make somethingS</>}
    </>
  );
};

export default Profile;
