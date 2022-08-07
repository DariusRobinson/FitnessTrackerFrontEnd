import React, { useState } from "react";
import { createRoutine } from "../api";
import { clearUsernameAndToken } from "../auth";

const RoutineForm = ({
  currentUser,
  createRoutineActive,
  setCreateRoutineActive,
  token,
  allRoutines,
  setAllRoutines, 
  
}) => {
  const [willBePublic, setWillBePublic] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let goal = event.target.goal.value;
    let isPublic = willBePublic;
    const response = await createRoutine(name, goal, isPublic, token);
    if(response.message === 'duplicate key value violates unique constraint "routines_name_key"'){
      return alert('Routine Already Exists')
    }

      response.creatorName = currentUser;



    //make a copy of the array of routines then push the new routine we created on the copy and instantly render it without refreshing the page...
      const routinestoDisplay = [...allRoutines, response]
      console.log(routinestoDisplay,"ROUTINES TO DISPLAY")
      console.log(allRoutines, "ALL ROUTINES")
      setAllRoutines(routinestoDisplay);
      setCreateRoutineActive(false)
  };



  return (
    <>
      <form className="routineForm" onSubmit={handleSubmit}>
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
        <input
        className="checkbox"
          id="isPublic"
          type="checkbox"
          name="isPublic"
          onChange={(event) => {
            setWillBePublic(!willBePublic);
            console.log(willBePublic)
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
