import React from "react";
import { createNewActivity } from "../api";

const ActiviyForm = ({ allActivities, setAllActivities, setActive, token }) => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let description = event.target.description.value;
    const response = await createNewActivity(name, description, token);
    console.log(response, "this is response");
    if (response.name === "ActivityAlreadyMade" && response.error) {
      setActive(false);
      return alert("Activity already exists");
    }

    const activitiestoDisplay = [...allActivities, response];
    // console.log(activitiestoDisplay, "this is what we want to have");
    // console.log(allActivities, "this is what was copied");
    setAllActivities(activitiestoDisplay);
    setActive(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <label htmlFor="activityName">Name:</label>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter Name"
        ></input>
        <label htmlFor="activityDescription">Description:</label>
        <input
          type="text"
          required
          name="description"
          placeholder="Enter Description"
        ></input>
        <button type="submit" className="activityFormButton">
          Create Activity
        </button>
      </form>
    </>
  );
};

export default ActiviyForm;
