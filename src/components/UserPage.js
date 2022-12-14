import React, { Fragment, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getPublicRoutinesByUser } from "../api";


const UserPage = ({currentUser, token}) =>{
    const [userRoutines, setUserRoutines] = useState([])
    const {username} = useParams()
    const navigate = useNavigate()
    const checkUser = () =>{
        if(username === currentUser){
            navigate('/Profile')
        }
    }

    const getUserRoutines = async () =>{
        const allUserRoutines = await getPublicRoutinesByUser(token, username) 
        if(!allUserRoutines || !allUserRoutines.length){
            navigate('/404page')
        }
        setUserRoutines(allUserRoutines)
    } 
    useEffect(()=>{
        checkUser()
    }, )
    useEffect(() =>{
        getUserRoutines()
    },[])

    
    
    
    return <>
    <h1>Check Out {username}'s Routines!</h1>
    {userRoutines.map((element, index) => {
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
                      <p className="">Activity: <NavLink to={`/activities/${activity.id}/routines`}>{name}</NavLink></p>
                      <p className="">{`Activity Description: ${activity.description}`}</p>
                      <p className="">{`Reps:${activity.count}`}</p>
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


export default UserPage