import React, { useState } from "react";
import { editRoutine } from "../api";

const EditRoutine = ({
  token,
  routineId,
  isPublic,
  name,
  goal,
  editRoutineActive,
  setEditRoutineActive,
}) => {
  const [routineName, setRoutineName] = useState(name);
  const [routineGoal, setRoutineGoal] = useState(goal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await editRoutine(name, goal, isPublic, token, routineId);
    console.log(response, "newResponse");
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
          }}
        ></input>
        <input
          id="isPublic"
          type="checkbox"
          name="isPublic"
          checked
          onChange={(event) => {
            setWillBePublic(!willBePublic);
          }}
        ></input>
        <button className="EditRoutineFormButton">Save Changes</button>
      </form>
    </>
  );
};

export default EditRoutine;
