import React, { useState } from 'react'
import './css/Register.css'

import {loginUrl} from '../config/spotify.jsx'
function Register() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(null);
  
  const createUserWithEmailAndPasswordHandler = (event,email,password) => {
    event.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");

  };

  const onChangeHandler = event => {
    const {name,value} = event.currentTarget;

    if(name == "Username") {
      setUsername(value);

    }

    
    if(name == "UserEmail") {
      setEmail(value);

    }
    
    if(name == "UserPassword") {
      setPassword(value);

    }

  }








    return (
        
        <div className="register">
          
        <img
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          alt="Spotify logo"
        />
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

        <form className="form">
        <input className="form-input"
         type="text"
         id="Username"
         name="Username"
         value={username}
         onChange={event => onChangeHandler(event)}
          placeholder="Enter your UserName "></input>
        <input className="form-input"
         type="email"
         id="UserEmail"
         name="UserEmail"
         value={email}
         onChange={event => onChangeHandler(event)}
         
         placeholder="Enter your Email "></input>
        <input className="form-input" 
        type="password"
        id="UserPassword"
        name="UserPassword"
        value={password}
        onChange={event => onChangeHandler(event)}
        placeholder="Enter your Password "></input>
        <input className="form-input" type="password" placeholder="Confirm your Password "></input>
        <button type="button" className="login-with-btn" >Sign Up </button>

        <br></br>
        </form>
        <button   onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
            >
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
 
        </button>
        <a href="#" className="have-account">I already Have an account</a>

      </div>
      
    );
}

export default Login
