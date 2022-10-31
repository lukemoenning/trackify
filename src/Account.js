import React from 'react';
import './Account.css';
import { useDataLayerValue } from './DataLayer';
import Menu from './Menu';
import Body from './Body';
import Footer from './Footer';


function Account() {

  /**
  * DataLayer
  */
  const [{}, dispatch] = useDataLayerValue();

  return (
    <div className='account'>
      <div className='account-wrap'>
        <Menu />
        <Body />
      </div>

      <Footer />
    </div>
    )
};

export default Account;