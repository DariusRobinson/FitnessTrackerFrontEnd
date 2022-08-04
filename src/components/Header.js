import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Logout} from "./";


const Header = ({setCurrentUser, currentUser, setToken}) =>{
    return(
      <>
        <header>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/routines">Routines</NavLink>
        <NavLink to="/activities">Activities</NavLink>
      {  currentUser ? <Logout setToken={setToken} setCurrentUser={setCurrentUser}/>  :  <></>}
        </header>
      <br/>
      <Outlet/>
      </>
    )
}





export default Header