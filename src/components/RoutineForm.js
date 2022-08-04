import React, { useState } from "react";
import { createRoutine } from "../api";

const RoutineForm = ({createRoutineActive, setCreateRoutineActive}) => {
const [willBePublic, setWillBePublic] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let goal = event.target.goal.value;
   isPublic = willBePublic;
   const response = await createRoutine(name, goal, isPublic);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="createNewRoutine"></label>
        <input
          id="routineTextBox"
          type="text"
          required
          name="name"
          placeholder="Enter Routine Name"
        ></input>
        <input
          id="goalTextBox"
          type="text"
          required
          name="goal"
          placeholder="Enter Description"
        ></input>
        <input
          id="isPublic"
          type="checkbox"
          name="isPublic"
          onChange={(event) => {
            setWillBePublic(false);
            console.log(checked)
          }}
        ></input>
        <button className="activityFormButton">Create Routine</button>
      </form>
    </>
  );

};
export default RoutineForm;
