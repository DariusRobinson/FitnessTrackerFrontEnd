import React from "react";


const ActiviyForm = () => {

    const handleOnSubmit = ()=>{
        console.log('i was clicked')
    }

    return(
        <>
        <form onSubmit={handleOnSubmit}>
        <label htmlFor="createNewActivity"></label>
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Description"></input>
        <button className="activityFormButton">Create Activity</button>
        </form>
        </>
    )
}







export default ActiviyForm