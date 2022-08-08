import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllRoutines } from "../api";
import { RoutineForm, AddActivity, DeleteRoutine, EditRoutine, DeleteRoutineActivity, EditRoutineActivity } from "./";

const Routines = ({ allRoutines, setAllRoutines, token, currentUser, allActivities }) => {
  const [createRoutineActive, setCreateRoutineActive] = useState(false);
  const [editRoutineActive, setEditRoutineActive] = useState(null);
  const [addActivtytoRoutineActive, setAddActivtytoRoutineActive] = useState(null);
  const [isActive, setIsActive] = useState(null);


  


  
  const fetchRoutines = async () => {
    const routinesToDisplay = await getAllRoutines();
    setAllRoutines(routinesToDisplay);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);
  return (
    <>
      {token && !createRoutineActive ? (
        <button
          className="createRoutine"
          onClick={() => {
            setCreateRoutineActive(true);
          }}
        >
          Create Routine
        </button>
      ) : (
        <></>
      )}

      {createRoutineActive ? (
        <RoutineForm
          currentUser={currentUser}
          setCreateRoutineActive={setCreateRoutineActive}
          token={token}
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
        />
      ) : (
        <></>
      )}
      <div>
        {allRoutines.map((element, index) => {
          let routineId = element.id;
          let creatorName = element.creatorName;

          return (
            <div  key={index} className="routines">
              <p className="routineCreator">Created By: <NavLink to={`/routines/${creatorName}`}>{creatorName}</NavLink></p>
              <p className="routineName">{`Routine: ${element.name}`}</p>
              <p className="routineGoal">{`Goal: ${element.goal}`}</p>
              {element.activities ? (
                element.activities.map((activity, activityIdx) => {
                  let routineActivityId = activity.routineActivityId
                  return (
                    <Fragment key={activityIdx}>
                      <p className="">{`Activity: ${activity.name}`}</p>
                      <p className="">{`Activity Description: ${activity.description}`}</p>
                      <p className="">{`Reps: ${activity.count}`}</p>
                      <p className="">{`Duration: ${activity.duration} interval of time that you feel the burn!`}</p>
                      {creatorName === currentUser && !addActivtytoRoutineActive && !editRoutineActive && !isActive ?
                      <>
                      <DeleteRoutineActivity routineActivityId={routineActivityId} token={token} allRoutines={allRoutines} setAllRoutines={setAllRoutines} setIsActive={setIsActive} routineId={routineId}/>
                      <button onClick={()=>{
                        setIsActive(routineActivityId)}}>Edit Activity</button>
                      </>  : <></>}
                      {routineActivityId === isActive ? <><EditRoutineActivity routineActivityId={routineActivityId} token={token} allRoutines={allRoutines} setAllRoutines={setAllRoutines} setIsActive={setIsActive} routineId={routineId} count={activity.count} duration={activity.duration} name={activity.name} description={activity.description}/>
                      <button onClick={()=>{setIsActive(null)}}>Cancel</button></>
                       : <></>}
                      

                      <br/>
                      <br/>

                    </Fragment>
                  );
                })
              ) : (
                <></>
              )}
              {token && !editRoutineActive && !addActivtytoRoutineActive && creatorName === currentUser && !isActive ? (
                <Fragment>
                <button
                  onClick={() => {
                    setEditRoutineActive(routineId);
                  }}
                >
                  Edit Routine
                </button>
                <DeleteRoutine token={token} routineId={routineId} allRoutines={allRoutines} setAllRoutines={setAllRoutines} />
                <button onClick={() => {
                    setAddActivtytoRoutineActive(routineId + 1);
                  }}
                > Add Activity To Routine </button>
                </Fragment>
              ) : (
                <></>
              )}

              {editRoutineActive === routineId ? (
                <Fragment>
                  <EditRoutine
                    setEditRoutineActive={setEditRoutineActive}
                    name={element.name}
                    goal={element.goal}
                    token={token}
                    routineId={routineId}
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                    currentUser={currentUser}
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
                  <AddActivity allActivities={allActivities} routineId={routineId} allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines} setAddActivtytoRoutineActive={setAddActivtytoRoutineActive}/>
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
    </>
  );
};

export default Routines;
