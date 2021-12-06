import React from "react";
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background: "black"
}

const Navigation = (props) => {


    if (props.loggedIn) {
       return ( 
        <div className="navbar">
            <NavLink 
                to='/'
                exact
                style={link}
                className="nav"
                activeStyle={{
                    background: 'darkblue'
                }}
                >Home</NavLink>
            <NavLink
                to="/community"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Community Board</NavLink>
            <NavLink
                to={'/profile/'+ props.user.id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Profile</NavLink>
            <NavLink
                to={'/profile/'+ props.user.id}
                exact
                style={link}
                onClick={props.logoutUser}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Logout</NavLink>
        </div>
    )
    } else {
        return (
            <div className="navbar">
                <NavLink 
                    to='/'
                    exact
                    style={link}
                    className="nav"
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >Home</NavLink>
                <NavLink 
                    to='/login'
                    exact
                    style={link}
                    className="nav"
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >Login</NavLink>
                <NavLink 
                    to='/signup'
                    exact
                    style={link}
                    className="nav"
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >Signup</NavLink>
            </div>
        )
    }
}

export default Navigation
