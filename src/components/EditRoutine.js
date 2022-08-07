import React, { useState } from "react";
import { editRoutine, getAllRoutines } from "../api";

const EditRoutine = ({
  currentUser,
  token,
  routineId,
  name,
  goal,
  editRoutineActive,
  setEditRoutineActive,
  allRoutines,
  setAllRoutines,
  myRoutines, setMyRoutines
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
    response.creatorName = currentUser;

    if(response.message === 'duplicate key value violates unique constraint "routines_name_key"'){

      setEditRoutineActive(null);
      return alert('Routine Already Exists')

    }

    if(myRoutines){
      const editedRoutines = [...myRoutines];
      editedRoutines.forEach((element, index) => {
        if (element.id === routineId) {
          editedRoutines.splice(index, 1, response);
        }
      });
      setMyRoutines(editedRoutines);
      setEditRoutineActive(null);
      }else{

    const editedRoutines = [...allRoutines];
    editedRoutines.forEach((element, index) => {
      if (element.id === routineId) {
        editedRoutines.splice(index, 1, response);
      }
    });
    setAllRoutines(editedRoutines);
    setEditRoutineActive(null);

  };}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
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
        className="checkbox"
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
