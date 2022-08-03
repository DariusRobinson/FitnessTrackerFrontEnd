import React, { Fragment, useEffect, useState } from "react";
import { getAllRoutines } from "../api";
import RoutineForm from "./RoutineForm";

const Routines = ({
  allRoutines,
  setAllRoutines,
  token,
  createRoutineActive,
  setCreateRoutineActive,
}) => {
  const fetchRoutines = async () => {
    allRoutines = await getAllRoutines();
    setAllRoutines(allRoutines);
    console.log(allRoutines);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);
  return (
    <>
      {token && !createRoutineActive? (
        <button
          className="createRoutine"
          onClick={() => {
            console.log("i was clicked")
            setCreateRoutineActive(true);
          }}
        >
          Create Routine
        </button>
      ) : <></>}
      {createRoutineActive ?  
      <RoutineForm createRoutineActive={createRoutineActive} setCreateRoutineActive={setCreateRoutineActive} />
      : <h1>hello world</h1>}
      <div>
        {allRoutines.map((element, index) => {
          return (
            <div key={index} className="routines">
              <p className="routineCreator">{`Created By: ${element.creatorName}`}</p>
              <p className="routineName">{`Routine: ${element.name}`}</p>
              <p className="routineGoal">{`Goal: ${element.goal}`}</p>
              {element.activities.map((activity, activityIdx) => {
                return (
                  <Fragment key={activityIdx}>
                    <p className="">{`Activity: ${activity.name}`}</p>
                    <p className="">{`Activity Description :${activity.description}`}</p>
                    <p className="">{`Reps:${activity.count}`}</p>
                    <p className="">{`Duration: ${activity.duration} interval of time that you feel the burn!`}</p>
                  </Fragment>
                );
              })}
              ,
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Routines;
