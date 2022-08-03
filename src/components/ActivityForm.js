import React from "react";
import { createNewActivity } from "../api";

const ActiviyForm = ({ allActivities, setAllActivities, setActive, token }) => {
  
  
  
    const handleOnSubmit = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let description = event.target.description.value;
    const response = await createNewActivity(name, description, token)
    console.log(response, 'this is response')

    const activitiestoDisplay = [...allActivities].push(response)
        setAllActivities(activitiestoDisplay);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="createNewActivity"></label>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter Name"
        ></input>
        <input
          type="text"
          required
          name="description"
          placeholder="Enter Description"
        ></input>
        <button className="activityFormButton">Create Activity</button>
      </form>
    </>
  );
};

export default ActiviyForm;
