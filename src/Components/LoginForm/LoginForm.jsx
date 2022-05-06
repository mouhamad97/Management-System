import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (
    <div className='LoginContainer'>
        <form action="">
            <label className='label' htmlFor="email">Email</label> <br/>
            <input type="text" name="email" placeholder='' className="LoginInput" id="" /> <br></br>
            <label  className='label' htmlFor="password">Password</label> <br/>
            <input type="text" name="password"  placeholder=''className="LoginInput" id="" /><br/>
            <input type="submit" className="loginButton" value="LOGIN" />
        </form>
    </div>
  )
}

export default LoginForm