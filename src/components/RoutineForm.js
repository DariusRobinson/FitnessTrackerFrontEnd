import React, { useState } from "react";
import { createRoutine } from "../api";

const RoutineForm = ({
  currentUser,
  setCreateRoutineActive,
  token,
  allRoutines,
  setAllRoutines,
  myRoutines,
  setMyRoutines,
}) => {
  const [willBePublic, setWillBePublic] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let goal = event.target.goal.value;
    let isPublic = willBePublic;
    const response = await createRoutine(name, goal, isPublic, token);
    if (
      response.message ===
      'duplicate key value violates unique constraint "routines_name_key"'
    ) {
      return alert("Routine Already Exists");
    }

    response.creatorName = currentUser;

    if (myRoutines) {
      const routinestoDisplay = [...myRoutines, response];
      setMyRoutines(routinestoDisplay);
      setCreateRoutineActive(false);
      setMyRoutines(routinestoDisplay);
      setCreateRoutineActive(false);
    } else {
      const routinestoDisplay = [...allRoutines, response];
      setAllRoutines(routinestoDisplay);
      setCreateRoutineActive(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
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
          placeholder="Enter Your Goal"
        ></input>
        <label htmlFor="isPublic"> Is public?</label>
        <input
          className="checkbox"
          id="isPublic"
          type="checkbox"
          name="isPublic"
          onChange={(event) => {
            setWillBePublic(!willBePublic);
          }}
        ></input>
        <button type="submit" className="activityFormButton">
          Create Routine
        </button>
      </form>
      <button
        className="cancelButton"
        onClick={() => {
          setCreateRoutineActive(false);
        }}
      >
        Cancel
      </button>
    </>
  );
};
export default RoutineForm;
