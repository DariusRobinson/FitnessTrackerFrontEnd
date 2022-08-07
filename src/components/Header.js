import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Logout} from "./";


const Header = ({setCurrentUser, currentUser, setToken}) =>{
    return(
      <>
      <header className="mainHeader">
          {  currentUser ?  <NavLink className="navlinks" to="/profile">Profile</NavLink>  :  <></>}
        <NavLink className="navlinks" to="/">Home</NavLink>
        <NavLink className="navlinks" to="/routines">Routines</NavLink>
        <NavLink className="navlinks" to="/activities">Activities</NavLink>
      {  currentUser ? <Logout setToken={setToken} setCurrentUser={setCurrentUser}/>  :  <></>}
        </header>
      <br/>
      <Outlet/>
      </>
    )
}





export default Header