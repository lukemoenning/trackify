/**
 * Main page displayed after a successful login
 */

import React from 'react';
import './styles/Account.css';
import { useDataLayerValue } from '../DataLayer';
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
      <div className='menuAndBodyWrap'>
        <Menu />
        <Body />
      </div>

      <Footer />
    </div>
    )
};

export default Account;