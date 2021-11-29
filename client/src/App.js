import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import CommunityBoard from './containers/CommunityBoard'
import Navigation from './components/Navigation'
import Home from './containers/Home'
import UserProfile from './containers/UserProfile'
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setLoggedIn(true)
        });
      }
    });
  }, []);

  const loginUser = (u) => {
    setLoggedIn(true)
    setUser(u)
    navigate("/profile/" + u.id);
  }

  const logoutUser = (u) => {
    fetch(`/logout`, {
    method: "DELETE",
    }).then(() => {
      console.log("logged out")
      setLoggedIn(false)
      setUser({})
      navigate("/")
    })
  }

  return (
    <div>
      <Navigation user={user} loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/community' element={<CommunityBoard/>}/>
        <Route index path='/profile/:id' element={<UserProfile user={user}/>}/>
        <Route index path='/login' element={<LoginForm loginUser={loginUser} />}/>
        <Route index path='/signup' element={<SignupForm loginUser={loginUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
