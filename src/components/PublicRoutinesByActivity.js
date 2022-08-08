import React, { Fragment, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getPublicRoutinesByActivity } from "../api";




const PublicRoutinesByActivity = ({allActivities}) =>{
    const [activityRoutines, setActivityRoutines] = useState([])
    const {activityId} = useParams()
    const [currentActivityName, setCurrentActivityName] = useState('')
    const navigate = useNavigate()

    const getActivityRoutines = async () =>{
    
        const allActivityRoutines = await getPublicRoutinesByActivity(activityId) 
        if(!allActivityRoutines || !allActivityRoutines.length){
            navigate('/404page')
        }
        setActivityRoutines(allActivityRoutines)
        allActivities.map((activity)=>{
            if(activity.id == activityId ){
            setCurrentActivityName(activity.name)
        }
        })
    } 
    
    useEffect(() =>{
        getActivityRoutines()
    },[currentActivityName])

    
    
    
    return <>
    <h1>Check Out all Routines that Feature {currentActivityName}!</h1>
    {activityRoutines.map((element, index) => {
       let creatorName = element.creatorName
       let goal = element.goal
       return(
        <div key={index} className="routines">
              <p className="routineCreator">Created By: <NavLink to={`/routines/${creatorName}`}>{creatorName}</NavLink></p>
              <p className="routineName">{`Routine: ${element.name}`}</p>
              <p className="routineGoal">{`Goal: ${element.goal}`}</p>
              {element.activities ? (
                element.activities.map((activity, activityIdx) => {
                    let name = activity.name
                  return (
                    <Fragment key={activityIdx}>
                      <p className="">Activity: <NavLink onClick={()=>{
                        setCurrentActivityName(name)}} to={`/activities/${activity.id}/routines`}>{name}</NavLink></p>
                      <p className="">{`Activity Description: ${activity.description}`}</p>
                      <p className="">{`Reps: ${activity.count}`}</p>
                      <p className="">{`Duration: ${activity.duration} interval of time that you feel the burn!`}</p>
                    </Fragment>
                  );
                })
              ) : (
                <></>
              )}
              
            </div>
       )
    }
    )}
    </>
}




export default PublicRoutinesByActivity