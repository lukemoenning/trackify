import React, { useEffect } from 'react';
import './styles/Body.css';
import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import Home from './Home';
import Library from './Library';
import Stats from './Stats';

function Body() {

  /**
  * DataLayer
  */
  const [{currentBodyDisplay}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header />
      
      {(() => {
        switch (currentBodyDisplay) {
          case 'home':
            return <Home/>;
          {/* case 'search':
            return <Search />; */}
          case 'library':
            return <Library />;
          case 'stats':
            return <Stats />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Body;