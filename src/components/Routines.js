import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllRoutines } from "../api";
import { RoutineForm } from "./";
import DeleteRoutine from "./DeleteRoutine";
import EditRoutine from "./EditRoutine";

const Routines = ({ allRoutines, setAllRoutines, token, currentUser, }) => {
  const [createRoutineActive, setCreateRoutineActive] = useState(false);
  const [editRoutineActive, setEditRoutineActive] = useState(null);
  


  
  const fetchRoutines = async () => {
    const routinesToDisplay = await getAllRoutines();
    setAllRoutines(routinesToDisplay);
    console.log(allRoutines);
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
            console.log("i was clicked");
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
          createRoutineActive={createRoutineActive}
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
            <div key={index} className="routines">
              <p className="routineCreator">Created By: <NavLink to={`/routines/${creatorName}`}>{creatorName}</NavLink></p>
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
              {token && !editRoutineActive && creatorName === currentUser ? (
                <Fragment>
                <button
                  onClick={() => {
                    console.log(routineId, "routine id");
                    setEditRoutineActive(routineId);
                  }}
                >
                  Edit Routine
                </button>
                <DeleteRoutine token={token} routineId={routineId} allRoutines={allRoutines} setAllRoutines={setAllRoutines} />
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
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                    currentUser={currentUser}
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
    </>
  );
};

export default Routines;
