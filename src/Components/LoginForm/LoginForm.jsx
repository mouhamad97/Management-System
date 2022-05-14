import React from 'react'
import './LoginForm.css'
import { useNavigate } from "react-router-dom";



function LoginForm() {

  let navigate = useNavigate();

  return (
    <div className='LoginContainer'>
        <form action="">
            <label className='label' htmlFor="email">Email</label> <br/>
            <input id="email" type="text" name="email" placeholder='' className="LoginInput" /> <br></br>
            <label  className='label' htmlFor="password">Password</label> <br/>
            <input id="password" type="text" name="password"  placeholder=''className="LoginInput" /><br/>
            <button onClick={()=>{
              let email = document.getElementById('email').value;
              let password = document.getElementById('password').value;
                if(email =="moe" && password ==123){
                  navigate('/Transactions')
                }
           
            }} className="loginButton" value="LOGIN">LOGIN</button>
            
        </form>
    </div>
  )
}

export default LoginForm