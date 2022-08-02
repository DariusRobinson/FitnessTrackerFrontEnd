import React from "react";
import { NavLink } from "react-router-dom";
import {Logout} from "./";


const Header = ({setCurrentUser}) =>{
    return(
        <>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/routines">Routines</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <Logout setCurrentUser={setCurrentUser}/>
        </>
    )
}





export default Header