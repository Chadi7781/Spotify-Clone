import './css/Login.css'
import React, {useState} from "react";

import {loginUrl} from '../config/spotify.jsx'


function Login() {  

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = 
      (event,email,password) => {
        event.preventDefault();

      };

      const onChangeHandler = (event)=>{
        const {name,value} = event.currentTarget;

        if(name === 'UserEmail') {
          setEmail(value);

        }
        else if(name === 'UserPassword') {
          setPassword(value);

        }

      }





    return (
        
        <div className="login">
        <img
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          alt="Spotify logo"
        />
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

        <form className="form">
        <input className="form-input" 
        type="email" 
        id="userEmail"
        name="userEmail"
        value={email} 
        placeholder="Enter your Email "
        onChange={(event)=>onChangeHandler(event)}
        ></input>
        <input className="form-input" 
        id="UserPassword"
        name="UserPassword"
        value={password}
        type="password" 
        placeholder="Enter your Password "
        onChange={(event)=>onChangeHandler(event)}

        ></input>
        <button type="button" className="login-with-btn" >Sign in </button>

        <br></br>
        <button type="button" className="login-with-google-btn" >Sign in with Google
</button>
        </form>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        <a href="#" className="have-account">I don't Have an account</a>

      </div>
      
    );
}

export default Login
