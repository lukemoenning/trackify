/**
 * Initial app
 * 
 * If a login has already occured will load Account, otherwise will promp a login with the Login component 
 */

import React, { useEffect } from 'react';
import './styles/App.css';
import { useDataLayerValue } from '../DataLayer';
import { getAccessTokenFromURL } from '../spotify';
import Login from './Login';
import Account from './Account';


function App() {

  /**
   * DataLayer
   */
  const [{ token, spotify }, dispatch] = useDataLayerValue();

  useEffect( () => {
    // Retrieve access token from URL
    const hash = getAccessTokenFromURL();
    const newToken = hash.access_token;

    // Remove the access token from the URL for security reasons
    window.location.hash = ''; 


    // If the retrieved token exists, set accountToken and spotify object
    if (newToken) {

      // Push token into DataLayer
      dispatch({
        type: "SET_TOKEN",
        token: newToken,
      });

      spotify.setAccessToken(newToken);

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

  return (
    <div className="app"> 
      {token ? (<Account />) : (<Login />)}
    </div>
  );
}

export default App;