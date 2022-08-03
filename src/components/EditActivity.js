import React from "react";
import { editActivity } from "../api";

const EditActivity = ({ allActivities, setAllActivities, setEditActive, token }) => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let description = event.target.description.value;
    const response = await editActivity(description, token);
    console.log(response, "this is response");

    const activitiestoDisplay = [...allActivities, response]
    setAllActivities(activitiestoDisplay);
    setEditActive(null)
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
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

export default EditActivity;
