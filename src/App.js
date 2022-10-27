import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getAccessTokenFromURL } from './spotify';

function App() {

  /**
   * Retrieves access token from the URL on a page reload. 
   */
  useEffect( () => {
    const token = getAccessTokenFromURL();
    console.log("token success", token);
  }, []);

  return (
    <div className="app"> 
      <Login />
    </div>
  );
}

export default App;
