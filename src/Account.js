import React from 'react';
import './Account.css';
import { useDataLayerValue } from './DataLayer';


function Account() {

    /**
    * DataLayer
    */
    const [{}, dispatch] = useDataLayerValue();

    return (
        <div>
           
        </div>
    )
    };

export default Account;