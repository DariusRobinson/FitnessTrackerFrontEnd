import React, { useState } from "react";
import { createRoutine } from "../api";

const RoutineForm = () => {
const [willBePublic, setWillBePublic] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let goal = event.target.goal.value;
   isPublic = willBePublic;
  const response = await createRoutine(name, goal, isPublic);
  return (
    <>Hello Wolrd
      {/* <form onSubmit={handleSubmit}>
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
            setWillBePublic(true);
          }}
        ></input>
        <button className="activityFormButton">Create Routine</button>
      </form> */}
    </>
  );
};
};
export default RoutineForm;
