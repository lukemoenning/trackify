import React from 'react';
import './Login.css';
import logo from './assets/images/spotify_logo.svg'

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt='Spotfiy Logo'></img>
      <a>Login with Spotify</a>
    </div>
    )
}

export default Login