import React, { Fragment, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getPublicRoutinesByUser } from "../api";


const UserPage = ({setAllRoutines, allRoutines, currentUser, token}) =>{
    const [userRoutines, setUserRoutines] = useState([])
    const {username} = useParams()
    const navigate = useNavigate()
    const checkUser = () =>{
        if(username === currentUser){
            navigate('/Profile')
        }
    }

    const getUserRoutines = async () =>{
        console.log(token, 'what we sent')
        const allUserRoutines = await getPublicRoutinesByUser(token, username) 
        if(!allUserRoutines || !allUserRoutines.length){
            console.log('this happened')
            navigate('/404page')
        }
        setUserRoutines(allUserRoutines)
        console.log(userRoutines, 'this is what we got')
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
                  return (
                    <Fragment key={activityIdx}>
                      <p className="">{`Activity: ${activity.name}`}</p>
                      <p className="">{`Activity Description :${activity.description}`}</p>
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