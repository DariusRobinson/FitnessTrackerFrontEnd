import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, getPublicRoutinesByUser } from "../api";
import {DeleteRoutine, EditRoutine, AddActivity, EditRoutineActivity, DeleteRoutineActivity} from './'

const Profile = ({ token, currentUser, allRoutines, allActivities  }) => {
    const [myRoutines, setMyRoutines] = useState([])
    const [editRoutineActive, setEditRoutineActive] = useState(null);
    const [addActivtytoRoutineActive, setAddActivtytoRoutineActive] = useState(null);
    const [isActive, setIsActive] = useState(null)

    const navigate = useNavigate()
    const getMyRoutines = async () =>{
        const allUserRoutines = await getPublicRoutinesByUser(token, currentUser) 
        setMyRoutines(allUserRoutines)
        console.log(myRoutines, 'this is what we got')
    } 
    useEffect(()=>{
        if(!token){
            alert('You are not logged in')
            navigate('/')
        }
    })
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
    
      <h1 className="homepage">Welcome back! Here's a list of all your Routines</h1>
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
                  let routineActivityId = activity.routineActivityId
                  return (
                    <Fragment key={activityIdx}>
                      <p className="">{`Activity: ${activity.name}`}</p>
                      <p className="">{`Activity Description :${activity.description}`}</p>
                      <p className="">{`Reps:${activity.count}`}</p>
                      <p className="">{`Duration: ${activity.duration} interval of time that you feel the burn!`}</p>
                      {!addActivtytoRoutineActive && !editRoutineActive && !isActive ?
                      <>
                      <DeleteRoutineActivity routineActivityId={routineActivityId} token={token} myRoutines={myRoutines} setMyRoutines={setMyRoutines} setIsActive={setIsActive} routineId={routineId}/>
                      <button onClick={()=>{
                        console.log(routineActivityId, 'what we set it to')
                        console.log(isActive, 'the static comparison')
                        setIsActive(routineActivityId)}}>Edit Activity</button>
                      </>  : <></>}
                      {routineActivityId === isActive ? <><EditRoutineActivity routineActivityId={routineActivityId} token={token} myRoutines={myRoutines} setMyRoutines={setMyRoutines} setIsActive={setIsActive} routineId={routineId} count={activity.count} duration={activity.duration}/>
                      <button className="cancelButton" onClick={()=>{setIsActive(null)}}>Cancel</button></>
                       : <></>}
                      

                      <br/>
                      <br/>

                    </Fragment>
                  );
                })
              ) : (
                <></>
              )}
              {!editRoutineActive && !addActivtytoRoutineActive ? (
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
                <button onClick={() => {
                    console.log(routineId, "routine id");
                    setAddActivtytoRoutineActive(routineId + 1);
                  }}
                > Add Activity </button>
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
                  <button className="cancelButton" onClick={()=>{
                    setEditRoutineActive(null)
                  }}>Cancel</button>
                </Fragment>
              ) : (
                <></>
              )}
              {addActivtytoRoutineActive === routineId + 1 ? (
                <Fragment>
                  <AddActivity allActivities={allActivities} routineId={routineId} myRoutines={myRoutines}
                    setMyRoutines={setMyRoutines} setAddActivtytoRoutineActive={setAddActivtytoRoutineActive}/>
                  <button className="cancelButton" onClick={()=>{
                    setAddActivtytoRoutineActive(null)
                  }}>Cancel</button>
                </Fragment>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      : <>Go make something</>}
    </>
  );
};

export default Profile;
