import React, { Fragment, useEffect, useState } from "react";
import { getAllRoutines } from "../api";
import { RoutineForm } from "./";
import EditRoutine from "./EditRoutine";

const Routines = ({ allRoutines, setAllRoutines, token, currentUser }) => {
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
              <p className="routineCreator">{`Created By: ${element.creatorName}`}</p>
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
                <button
                  onClick={() => {
                    console.log(routineId, "routine id");
                    setEditRoutineActive(routineId);
                  }}
                >
                  Edit Routine
                </button>
              ) : (
                <></>
              )}

              {editRoutineActive === routineId ? (
                <Fragment>
                  <EditRoutine
                    editRoutineActive={editRoutineActive}
                    setEditRoutineActive={setEditRoutineActive}
                    name={element.name}
                    description={element.goal}
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
