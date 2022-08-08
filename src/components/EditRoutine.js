import React, { useState } from "react";
import { editRoutine, getAllRoutines } from "../api";

const EditRoutine = ({
  currentUser,
  token,
  routineId,
  name,
  goal,
  setEditRoutineActive,
  allRoutines,
  setAllRoutines,
  myRoutines, setMyRoutines
}) => {
  const [routineName, setRoutineName] = useState(name);
  const [routineGoal, setRoutineGoal] = useState(goal);
  const [isPublic, setIsPublic] = useState(false);

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
          if(element.activities){
            response.activities = element.activities
          }
          editedRoutines.splice(index, 1, response);
        }
      });
      setMyRoutines(editedRoutines);
      setEditRoutineActive(null);
      }else{

    const editedRoutines = [...allRoutines];
    editedRoutines.forEach((element, index) => {
      if (element.id === routineId) {
        if(element.activities){
          response.activities = element.activities
        }
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
          required
          placeholder="Enter Name of Routine"
          onChange={(event) => {
            setRoutineName(event.target.value);
          }}
        ></input>
        <input
          type="text"
          value={routineGoal}
          name="goal"
          required
          placeholder="Enter Goal for Routine"
          onChange={(event) => {
            setRoutineGoal(event.target.value);
          }}
        ></input>
        <label htmlFor="isPublic">Is public?</label>
        <input
        className="checkbox"
          id="isPublic"
          type="checkbox"
          name="isPublic"
          onChange={(event) => {
            setIsPublic(!isPublic);
          }}
        ></input>
        <button className="EditRoutineFormButton genButton">Save Changes</button>
      </form>
    </>
  );
};

export default EditRoutine;
