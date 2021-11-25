import React, { useState } from "react";

const SignupForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        bio,
      }),
    }).then((r) => {
    //   if (r.ok) {
        r.json().then((user) => onLogin(user));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
      }
    )
  }

  return (
          <div className="signup">
            <form className="tile" onSubmit={handleSubmit}>
                <h1>Sign Up Here!</h1>
                <label>Username:</label><br/>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label>Password:</label><br/>
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <label>Password Confirmation:</label><br/>
                <input type="text" name="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
                <label>Tell us a little about yourself:</label><br/>
                <input type="textarea" name="bio" value={bio} onChange={(e) => setBio(e.target.value)}/><br/>
                <input className="submit" type="submit"/>
            </form>
        </div>
       
  )
}

export default SignupForm;