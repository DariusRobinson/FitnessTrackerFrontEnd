import React, { useEffect, useState } from "react";
import { getAllActivities } from "../api";
import ActiviyForm from "./ActivityForm";
import EditActivity from "./EditActivity";

const Activities = ({ allActivities, setAllActivities, token }) => {
  const [active, setActive] = useState(false);
  const [editActive, setEditActive] = useState(null);

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
      {token && !active ?  
        <button
        className="activityFormButton"
        onClick={() => {
          setActive(true);
        }}
      >
        Create New Activity
      </button> : <></>}
        <>
          {active ? (
            <>
              <ActiviyForm allActivities={allActivities} setAllActivities={setAllActivities} setActive={setActive} token={token}/>
              <button
                className="activityFormCancelButton"
                onClick={() => {
                  setActive(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : <></>
              }</>
      )

      {allActivities.map((element, index) => {
        let activityId = element.id
        return (
          <div key={index} className="activities">
            <h4 className="activityName">{element.name}</h4>
            <p className="activityDescription">{element.description}</p>
            {token ? (
              <>
                {editActive == activityId ? (
                  <>
              <EditActivity allActivities={allActivities} setAllActivities={setAllActivities} setEditActive={setEditActive} token={token} activityId={activityId}/>
                    <button
                      className="activityFormCancelButton"
                      onClick={() => {
                        setEditActive(null);
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="activityFormButton"
                    value={activityId}
                    onClick={(event) => {
                      setEditActive(event.target.value);
                    }}
                  >
                    Edit Activity
                  </button>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Activities;
