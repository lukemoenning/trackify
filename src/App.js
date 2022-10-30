import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Account from './Account';
import { getAccessTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

/**
 * Spotify Web API object
 */
const spotify = new SpotifyWebApi();

function App() {

  /**
   * Account token
   */
  const [accountToken, setToken] = useState(null);

  useEffect( () => {
    // Retrieve access token from URL
    const hash = getAccessTokenFromURL();
    const token = hash.access_token;

    // Remove the access token from the URL for security reasons
    window.location.hash = ""; 

    // If the retrieved token exists, set accountToken and spotify object
    if (token) {
      setToken(token);
      spotify.setAccessToken(token);

      spotify.getMe().then(user => {console.log(user)});
    }
  }, []);

  return (
    <div className="app"> 
      {accountToken ? (<Account />) : (<Login />)}
    </div>
  );
}

export default App;
