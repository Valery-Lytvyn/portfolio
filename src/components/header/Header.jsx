import React from 'react';
import NavBar from '../navBar/NavBar';
import { MainColorContext } from '../../App';

import './header.scss';
import ContactIcons from '../contactIcons/ContactIcons';
import ColorSwatch from '../colorSwatch/ColorSwatch';

function Header({ changeColor }) {
   const mainColor = React.useContext(MainColorContext);


   return (
      <header className='header'>
         <div className="container">
            <div className="logo" style={
               { color: mainColor }}>
               <h6> React Developer </h6>
            </div>
            <NavBar />
            <ContactIcons />
         </div >
         <ColorSwatch changeColor={changeColor} />
      </header >
   )
}

export default Header