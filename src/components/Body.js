import React, { useEffect } from 'react';
import './styles/Body.css';
import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
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
      
      {(() => {
        switch (currentBodyDisplay) {

          case 'home':
            return <Home />;

          case 'library':
            return <Library />;

          case 'stats':
            return <Stats />;
              
          case 'playlist':
            return <Playlist id='' />

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Body;