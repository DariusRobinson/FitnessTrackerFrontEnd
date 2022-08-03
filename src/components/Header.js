import React from "react";
import { NavLink } from "react-router-dom";
import {Logout} from "./";


const Header = ({setCurrentUser, currentUser, setToken}) =>{
    return(
        <>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/routines">Routines</NavLink>
        <NavLink to="/activities">Activities</NavLink>
      {  currentUser ? <Logout setToken={setToken} setCurrentUser={setCurrentUser}/>  :  <></>}
        </>
    )
}





export default Header