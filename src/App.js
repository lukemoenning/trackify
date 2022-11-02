import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Account from './Account';
import { getAccessTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

/**
 * Spotify Web API object
 */
const spotify = new SpotifyWebApi();

function App() {

  /**
   * DataLayer
   */
  const [{ token, user }, dispatch] = useDataLayerValue();

  useEffect( () => {
    // Retrieve access token from URL
    const hash = getAccessTokenFromURL();
    const _token = hash.access_token;

    // Remove the access token from the URL for security reasons
    window.location.hash = ""; 

    // If the retrieved token exists, set accountToken and spotify object
    if (_token) {

      // Push token into DataLayer
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      // Push user into DataLayer
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // Push playlists into DataLayer
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

    }
  }, []);

  console.log("USER " + user);
  console.log("TOKEN " + token);

  return (
    <div className="app"> 
      {token ? (<Account />) : (<Login />)}
    </div>
  );
}

export default App;
