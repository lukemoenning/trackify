/**
 * The Your Library component after the user chooses to display it
 */

import React from 'react';
import './styles/Library.css';
import LibraryHeader from './LibraryHeader';
import LibraryBody from './LibraryBody';

function Library() {
  return (
    <div className='library'>
      <LibraryHeader />
      <LibraryBody />
    </div>
  );
}

export default Library;