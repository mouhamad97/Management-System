import React from 'react'
import './LoginForm.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function LoginForm() {
  let navigate = useNavigate();
  const Enter =() =>{
    navigate('/CreateBill')
  }
  return (
    <div className='LoginContainer'>
        <form action="">
            <label className='label' htmlFor="email">Email</label> <br/>
            <input type="text" name="email" placeholder='' className="LoginInput" id="" /> <br></br>
            <label  className='label' htmlFor="password">Password</label> <br/>
            <input type="text" name="password"  placeholder=''className="LoginInput" id="" /><br/>
            <button onClick={()=>{
              navigate('/CreateBill')
            }} className="loginButton" value="LOGIN">LOGIN</button>
            
        </form>
    </div>
  )
}

export default LoginForm