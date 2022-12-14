/**
 * Login component if the user has not yet successfully linked Spotify account
 * 
 * Takes the user to a Spotify verification page then redirects back
 */

import React from 'react';
import './styles/Login.css';
import logo from '../assets/images/spotify_logo_green.svg';
import { loginURL } from '../spotify';


function Login() {
  return (
    <div className='login'>
      <img src={logo} alt='Spotfiy Logo'></img>
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
    )
}

export default Login;