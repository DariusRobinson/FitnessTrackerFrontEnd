import React, { useState } from "react";
import { editRoutine, getAllRoutines } from "../api";

const EditRoutine = ({
  token,
  routineId,
  name,
  goal,
  editRoutineActive,
  setEditRoutineActive,
  allRoutines,
  setAllRoutines,
}) => {
  const [routineName, setRoutineName] = useState(name);
  const [routineGoal, setRoutineGoal] = useState(goal);
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await editRoutine(
      routineName,
      routineGoal,
      isPublic,
      token,
      routineId
    );
    console.log(name);
    console.log(response, "newResponse");
    setEditRoutineActive(null);

    let editedRoutines = [...allRoutines];
    editedRoutines.forEach((element, index) => {
      if (element.id === routineId) {
        editedRoutines.splice(index, 1, response);
      }
    });
    setAllRoutines(editedRoutines);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={routineName}
          name="name"
          placeholder="Enter Name of Routine"
          onChange={(event) => {
            setRoutineName(event.target.value);
          }}
        ></input>
        <input
          type="text"
          value={routineGoal}
          name="goal"
          placeholder="Enter Goal for Routine"
          onChange={(event) => {
            setRoutineGoal(event.target.value);
            console.log(routineGoal, "goal");
          }}
        ></input>
        <input
          id="isPublic"
          type="checkbox"
          name="isPublic"
          checked
          onChange={(event) => {
            setIsPublic(!isPublic);
          }}
        ></input>
        <button className="EditRoutineFormButton">Save Changes</button>
      </form>
    </>
  );
};

export default EditRoutine;
