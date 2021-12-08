import React from "react";
import { NavLink } from 'react-router-dom'


const Navigation = (props) => {


    if (props.loggedIn) {
       return ( 
        <nav className="navbar">
            <NavLink 
                to="/"
                className="navLink"
                exact
                >Home</NavLink>
            <NavLink
                to="/community"
                exact
                className="navLink"
                >Community Board</NavLink>
            <NavLink
                to={"/profile/"+ props.user.id}
                exact
                className="navLink"
                >Profile</NavLink>
            <NavLink
                to='/login'
                exact
                className="navLink"
                onClick={props.logoutUser}
                >Logout</NavLink>
        </nav>
    )
    } else {
        return (
            <nav className="navbar">
                <NavLink 
                    to='/'
                    exact
                    className="navLink"
                    >Home</NavLink>
                <NavLink 
                    to='/login'
                    exact
                    className="navLink"
                    >Login</NavLink>
                <NavLink 
                    to='/signup'
                    exact
                    className="navLink"
                    >Signup</NavLink>
            </nav>
        )
    }
}

export default Navigation
