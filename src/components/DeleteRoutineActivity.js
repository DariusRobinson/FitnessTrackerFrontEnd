import React from "react";
import { deleteActivityOnRoutine } from "../api";

const DeleteRoutineActivity = ({
  token,
  routineActivityId,
  allRoutines,
  setAllRoutines,
  routineId,
  setMyRoutines,
  myRoutines,
}) => {
  const handleOnClick = async (event) => {
    event.preventDefault();

    if (myRoutines) {
      await deleteActivityOnRoutine(routineActivityId, token);

      let deletedActivity = [...myRoutines];
      deletedActivity.forEach((element) => {
        if (element.id === routineId) {
          element.activities.forEach((activity, index) => {
            if (activity.routineActivityId === routineActivityId)
              element.activities.splice(index, 1);
          });
        }
      });
      setMyRoutines(deletedActivity);
    } else {
      await deleteActivityOnRoutine(routineActivityId, token);
      let deletedActivity = [...allRoutines];
      deletedActivity.forEach((element) => {
        if (element.id === routineId) {
          element.activities.forEach((activity, index) => {
            if (activity.routineActivityId === routineActivityId)
              element.activities.splice(index, 1);
          });
        }
      });
      setAllRoutines(deletedActivity);

    }
  };
  return (
    <button className="cancelButton genButton" onClick={handleOnClick}>
      Remove Activity From Routine
    </button>
  );
};

export default DeleteRoutineActivity;
