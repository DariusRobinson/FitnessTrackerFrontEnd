import React, { useState } from "react";
import { editActivity } from "../api";

const EditActivity = ({
  allActivities,
  setAllActivities,
  setEditActive,
  token,
  activityId,
  activityDescription,
  activityName
}) => {
  const [name, setName] = useState(activityName)
  const [description, setDescription] = useState(activityDescription)

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let formDescription = event.target.description.value;
    let formName = event.target.name.value;
    const updateObj = {}
    updateObj.description = formDescription

    if(formName !== activityName){
      updateObj.name = formName
    }

    const response = await editActivity(activityId, updateObj, token);

    const activitiestoDisplay = [...allActivities];
    activitiestoDisplay.forEach((activity, index) => {
      if (activity.id === activityId) {
        activitiestoDisplay.splice(index, 1, response);
      }
    });

    setAllActivities(activitiestoDisplay);
    setEditActive(null);
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          required
          value={name}
          name="name"
          onChange={(event)=>{setName(event.target.value)}}
          placeholder="Enter Name"
        ></input>
        <input
          type="text"
          required
          value={description}
          name="description"
          onChange={(event)=>{setDescription(event.target.value)}}

          placeholder="Enter Description"
        ></input>
        <button className="activityFormButton genButton">Edit Activity</button>
      </form>
    </>
  );
};

export default EditActivity;
