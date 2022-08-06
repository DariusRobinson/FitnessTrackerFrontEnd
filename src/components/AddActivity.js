import React from "react";
import { addActivitytoRoutine } from "../api";


const AddActivity = ({allActivities, routineId, allRoutines, setAllRoutines, myRoutines, setMyRoutines, setAddActivtytoRoutineActive}) =>{
    console.log(allActivities,'!!!!!!')
    console.log(routineId, '???????/')



const handleSubmit = async (event)=>{
event.preventDefault()
const count = event.target.count.value
const duration = event.target.duration.value
const activityDescription = event.target.activityList[Number(event.target.activityList.value) + 1].dataset.activitydescription
const activityId = Number(event.target.activityList[Number(event.target.activityList.value) + 1].dataset.activityid)
const activityName = event.target.activityList[Number(event.target.activityList.value) + 1].dataset.activityname
const activityObj = {
    id: activityId,
    name: activityName,
    description: activityDescription,
    duration,
    count,
    routineId

}
const updatedRotine = await addActivitytoRoutine(routineId, activityId, count, duration)
activityObj.routineActivityId = updatedRotine.id

if(myRoutines){
    const editedRoutines = [...myRoutines];
    editedRoutines.forEach((element) => {
      if (element.id === routineId) {
        if(!element.activities){
            element.activities = []
        }
        element.activities.push(activityObj)
      }
    });
    setMyRoutines(editedRoutines);
    setAddActivtytoRoutineActive(null);
    }else{

  const editedRoutines = [...allRoutines];
  editedRoutines.forEach((element) => {
    if (element.id === routineId) {
        if(!element.activities){
            element.activities = []
        }
        element.activities.push(activityObj)
        console.log(element,'!!!!!!!')
      }
  });
  setAllRoutines(editedRoutines);
  setAddActivtytoRoutineActive(null);

}

}

    return(
        <>
        <form onSubmit={handleSubmit}>
        <select defaultValue='' name="activityList">
            <option value='' disabled >Choose an activity</option>
            {allActivities.map((element, idx)=>{
                let activityName = element.name
                let activityDescription = element.description
                let activityId = element.id
                return(
                    <option key={idx} id={idx} data-activityid={activityId} data-activityname={activityName} data-activitydescription={activityDescription} value={idx} >{activityName}</option>
                )
            })}
            </select>
            <label htmlFor="createNewRoutine"></label>
        <input
          id="activityCount"
          type="number"
          required
          name="count"
          placeholder="Enter count"
        ></input>
        <input
          id="activityDurtation"
          type="number"
          required
          name="duration"
          placeholder="Enter duration"
        ></input>
                <button type="submit">Submit</button>
        </form>
        </>
    )
}


export default AddActivity