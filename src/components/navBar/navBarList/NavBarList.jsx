import React from 'react';
import NavBarItem from '../navBarItem/NavBarItem';
import './navBarList.scss';

function NavBarList({ closeMenu, isShowMenu }) {
   const navBarData = ['home', 'about', 'portfolio', 'contact'];

   return (
      <ul className='navBarList'>
         {navBarData.map(item => (
            <NavBarItem item={item} key={item} closeMenu={closeMenu} isShowMenu={isShowMenu} />
         )
         )}
      </ul>
   )
}

export default NavBarList