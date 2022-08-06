import React from "react";
import { deleteRoutine } from "../api";



const DeleteRoutine = ({token, routineId, allRoutines, setAllRoutines, myRoutines, setMyRoutines})=>{

const handleOnClick = async (event) => {
event.preventDefault();

if(myRoutines){
await deleteRoutine(token, routineId)

let deletedRoutine = [...myRoutines];
deletedRoutine.forEach((element, index) => {
  if (element.id === routineId) {
    deletedRoutine.splice(index, 1);
  }
});
setMyRoutines(deletedRoutine);
}else{
  
  await deleteRoutine(token, routineId)
  let deletedRoutine = [...allRoutines];
  deletedRoutine.forEach((element, index) => {
    if (element.id === routineId) {
      deletedRoutine.splice(index, 1);
    }
  });
  setAllRoutines(deletedRoutine);
}
}






return <button onClick={handleOnClick}>Delete Routine</button>




}






export default DeleteRoutine