import React, { useState } from "react";


const SignupForm = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [errorsList, setErrorsList] = useState([])
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        firstname,
        lastname,
        password,
        password_confirmation: passwordConfirmation,
        bio,
      }),
    })
    .then(r => r.json())
    .then(user => {
      if (!user.errors) {
        loginUser(user)
      } else {
        setPassword("")
        setPasswordConfirmation("")
        const errorList = user.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      }
    })
  }

  return (
          <div className="signup">
            <form className="tile" onSubmit={handleSubmit}>
                <h1>Create A New Account</h1>
                <label>Username:</label><br/>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label>First Name:</label><br/>
                <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                <br/>
                <label>Last Name:</label><br/>
                <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                <br/>
                <label>Password:</label><br/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <label>Password Confirmation:</label><br/>
                <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
                <label>Tell us a little about yourself:</label><br/>
                <input type="textarea" name="bio" value={bio} onChange={(e) => setBio(e.target.value)}/><br/>
                <input className="submit" type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
       
  )
}

export default SignupForm;