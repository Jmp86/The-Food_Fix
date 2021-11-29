import React from "react";
import SignUpButton from "./SignupButton";
import LoginButton from "./LoginButton";
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
        <div>
            <NavLink 
                to='/'
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                ><button>Home</button></NavLink>
            <NavLink
                to="/community"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                ><button>Community Board</button></NavLink>
            <NavLink
                to={'/profile/'+ props.user.id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                ><button>Profile</button></NavLink>
                            <NavLink
                to={'/profile/'+ props.user.id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                ><button onClick={props.logoutUser} >Logout</button></NavLink>
        </div>
    )
    } else {
        return (
            <div>
                <LoginButton/> 
                <SignUpButton/>
            </div>
        )
    }
}

export default Navigation
