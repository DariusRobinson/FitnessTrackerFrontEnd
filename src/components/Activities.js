import React, { useEffect, useState } from "react";
import { getAllActivities } from "../api";
import ActiviyForm from "./ActivityForm";

const Activities = ({ allActivities, setAllActivities, token }) => {
  const [active, setActive] = useState(false);

  const fetchActivities = async () => {
    const activityList = await getAllActivities();
    console.log(activityList, "this is the activity list");
    setAllActivities(activityList);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      {token ? (
        <>
          {" "}
          {active ? (
            <>
              <ActiviyForm />
              <button
                className="activityFormCancelButton"
                onClick={() => {
                  setActive(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="activityFormButton"
              onClick={() => {
                setActive(true);
              }}
            >
              Create New Activity
            </button>
          )}
        </>
      ) : (
        <></>
      )}

      {allActivities.map((element, index) => {
        return (
          <div key={index} className="activities">
            <h4 className="activityName">{element.name}</h4>
            <p className="activityDescription">{element.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Activities;
