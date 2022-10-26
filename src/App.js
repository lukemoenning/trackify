import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getAccessTokenFromURL } from './spotify';

function App() {

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
