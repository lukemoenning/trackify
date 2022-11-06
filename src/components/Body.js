/**
 * The body section after a successful login
 * 
 * Updates to display what the user is currently viewing
 */

import React from 'react';
import './styles/Body.css';
import { useDataLayerValue } from '../DataLayer';
import Header from './Header';
import Home from './Home';
import Library from './Library';
import Stats from './Stats';
import Playlist from './Playlist';


function Body() {

  /**
   * DataLayer
   */
  const [{ currentBodyDisplay }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header />
      
      {/* Different possible pages the user can view */}
      {(() => {
        switch (currentBodyDisplay) {

          /* Display home page */
          case 'home':
            return <Home />;

          /* Display Your Library page */
          case 'library':
            return <Library />;

          /* Display Your Stats page */
          case 'stats':
            return <Stats />;
              
          /* Display a playlist once it has been opened */
          case 'playlist':
            return <Playlist />

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Body;