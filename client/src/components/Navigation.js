import { NavLink } from 'react-router-dom'
import React from "react";

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background: "black"
}

const Navigation = ({ user, setUser }) => {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
        
        <div>
            <NavLink 
                to='/home'
                exact
                style={link}
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
                to={'/profile/'+ user.id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Profile</NavLink>
            <button
                onClick={handleLogoutClick}
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Logout</button>
        </div>
    )
}

export default Navigation
