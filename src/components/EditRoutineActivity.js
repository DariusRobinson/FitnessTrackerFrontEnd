import React, { useState } from "react";
import { editActivityOnRoutine } from "../api";


const EditRoutineActivity = ({ routineActivityId, token, allRoutines, setAllRoutines, setIsActive, routineId, myRoutines, setMyRoutines, count, duration, name, description}) => {
    const [activityCount, setActivityCount] = useState(count);
    const [activityDuration, setActivityDuration] = useState(duration);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await editActivityOnRoutine(routineActivityId, activityCount, activityDuration, token );
      response.name= name
      response.description = description
      response.routineActivityId = routineActivityId
      response.id = response.activityId

      if(response.message === 'NotCreatorOfRoutine'){
        setIsActive(null);
        return alert("Impressive you got here but you cannot edit something that's not yours.")
      }
  
      if(myRoutines){
        const editedRoutineActivity = [...myRoutines];
        editedRoutineActivity.forEach((element) => {
            if (element.id === routineId) {
                element.activities.forEach((activity, index) => {
                    if(activity.routineActivityId === routineActivityId)
                    element.activities.splice(index, 1, response);})
            }
          });
        setMyRoutines(editedRoutineActivity);
        setIsActive(null);
        }else{
  
      const editedRoutineActivity = [...allRoutines];
      editedRoutineActivity.forEach((element, index) => {
        if (element.id === routineId) {
            element.activities.forEach((activity, index) => {
                if(activity.routineActivityId === routineActivityId)
                element.activities.splice(index, 1, response);})
        }
      });
      setAllRoutines(editedRoutineActivity);
      setIsActive(null);
  
    };}
  
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={activityCount}
            name="count"
            required
            placeholder="Count"
            onChange={(event) => {
              setActivityCount(event.target.value);
            }}
          ></input>
          <input
            type="text"
            value={activityDuration}
            name="duration"
            required
            placeholder="Duration"
            onChange={(event) => {
              setActivityDuration(event.target.value);
            }}
          ></input>
          <button type='submit' className="EditRoutineActivityFormButton">Save Changes</button>
        </form>
      </>
    );
  };





export default EditRoutineActivity