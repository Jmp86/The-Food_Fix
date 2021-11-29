// import { withRouter } from 'react-router-dom'
import React, { useState} from 'react'

const LoginForm = ({ loginUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              username,
              password 
              }),
          })
          .then((r) => {
            if (r.ok) {
              
              r.json().then((user) => loginUser(user));
            } else {
              r.json().then((err) => setErrors(err));
            }
          })
     
  }   

   
        return(
            <div className='login'>
                <form className='tile' onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <label>Username:</label><br/>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label>Password:</label><br/>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
                <h3>
                  {errors ? errors.errors : null}
                </h3>
            </div>
        )
    
}
export default LoginForm