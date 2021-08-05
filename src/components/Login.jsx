import React from 'react'
import './css/Login.css'

import {loginUrl} from '../config/spotify.jsx'
function Login() {
    return (
        
        <div className="login">
        <img
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          alt="Spotify logo"
        />

        <form className="form">
        <input className="form-input" type="email" placeholder="Enter your Email "></input>
        <input className="form-input" type="password" placeholder="Enter your Password "></input>
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
