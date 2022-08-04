import React from "react";
import { editRoutine } from "../api";

const EditRoutine = ({name, description}) => {




    return (
        <>
        <form>
        <input
        type="text"
        
        name="name"
        placeholder="Enter Name of Routine"
        ></input>
        <input
        type="text"

        name="goal"
        placeholder="Enter Goal for Routine"
        ></input>
        <button className="EditRoutineFormButton">Edit Routine</button>
        </form>
        </>
    )
}







export default EditRoutine