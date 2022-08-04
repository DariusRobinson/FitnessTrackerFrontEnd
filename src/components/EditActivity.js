import React from "react";
import { editActivity } from "../api";

const EditActivity = ({
  allActivities,
  setAllActivities,
  setEditActive,
  token,
  activityId,
}) => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let description = event.target.description.value;
    // let name = event.target.name.value;

    const response = await editActivity(activityId, description, token);
    console.log(response, "this is response");

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
      <form onSubmit={handleOnSubmit}>
        {/* <input
          type="text"
          required
          name="name"
          placeholder="Enter Name"
        ></input> */}
        <input
          type="text"
          required
          name="description"
          placeholder="Enter Description"
        ></input>
        <button className="activityFormButton">Edit Activity</button>
      </form>
    </>
  );
};

export default EditActivity;
