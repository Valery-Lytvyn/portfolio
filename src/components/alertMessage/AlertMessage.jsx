import React from 'react';
import './alertMessage.scss';
import { MainColorContext } from '../../App';

function AlertMessage({ text }) {
   const mainColor = React.useContext(MainColorContext);
   return (
      <div className='alertMessage'
         style={{ border: `1px solid ${mainColor}` }}
      >{text}</div>
   )
}

export default AlertMessage