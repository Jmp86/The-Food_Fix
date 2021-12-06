import React, { useState } from 'react'

const LoginForm = ({ loginUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/login", {
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
            <div className='login' style={{ backgroundImage: `url(https://www.goatsontheroad.com/wp-content/uploads/2020/02/10-Countries-With-The-Best-Food-To-Travel-To-in-2020-1100x593.jpg)`}}>
                <form className='tile' onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <label>Username:</label><br/>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label>Password:</label><br/>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
                <h3>
                  {errors ? errors.errors : null}
                </h3>
            </div>
        )
    
}
export default LoginForm