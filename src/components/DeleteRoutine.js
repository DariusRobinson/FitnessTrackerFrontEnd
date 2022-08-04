import React from "react";
import { deleteRoutine } from "../api";



const DeleteRoutine = ({token, routineId, allRoutines, setAllRoutines})=>{

const handleOnClick = async (event) => {
event.preventDefault();

const response = await deleteRoutine(token, routineId)
console.log(response)



let deletedRoutine = [...allRoutines];
deletedRoutine.forEach((element, index) => {
  if (element.id === routineId) {
    deletedRoutine.splice(index, 1);
  }
});
setAllRoutines(deletedRoutine);



}






return <button onClick={handleOnClick}>Delete Routine</button>




}






export default DeleteRoutine