import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CommunityBoard from './containers/CommunityBoard'
import Navigation from './components/Navigation'
import Home from './components/Home'
import UserProfile from './containers/UserProfile'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <Router>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route index path='community' element={<CommunityBoard/>}/>
        <Route index path='home' element={<Home/>}/>
        <Route index path='profile/:id' element={<UserProfile user={user} setUser={setUser}/>}/>
        <Route index path='login' element={<LoginForm/>}/>
        <Route index path='signup' element={<SignupForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
