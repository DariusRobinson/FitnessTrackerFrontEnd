import React from "react";
import { editRoutine } from "../api";

const EditRoutine = ({name, goal, editRoutineActive, setEditRoutineActive}) => {

const handleSubmit = (event)=>{
    event.preventDefault();
let name = event.target.name.value
let goal = event.target.goal.value
}


    return (
        <>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        name="name"
        placeholder="Enter Name of Routine"
        ></input>
        <input
        type="text"
        value={goal}
        name="goal"
        placeholder="Enter Goal for Routine"
        ></input>
        <button className="EditRoutineFormButton">Save Changes</button>
        </form>
        </>
    )
}







export default EditRoutine