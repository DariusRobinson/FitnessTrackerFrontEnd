import React from "react";
import { clearUsernameAndToken } from "../auth";


const Logout = ({setCurrentUser}) =>{

const handleOnclick = (event) =>{
event.preventDefault()
clearUsernameAndToken()
setCurrentUser(null)
}
    return(
        <button onClick={handleOnclick}>Logout</button>
    )
}






export default Logout