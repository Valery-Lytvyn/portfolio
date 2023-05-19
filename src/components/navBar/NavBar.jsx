import React from 'react';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import NavBarList from './navBarList/NavBarList';

import './navBar.scss';



function NavBar() {

   return (
      <div className='navBar'>
         <div className="navMenu">
            <NavBarList />
         </div>
         <HamburgerMenu />
      </div >
   )
}

export default NavBar