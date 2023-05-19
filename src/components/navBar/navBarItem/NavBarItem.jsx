import React, { useState } from 'react';
import { MainColorContext } from '../../../App';
import './navBarItem.scss';
import { Link } from 'react-scroll';

function NavBarItem({ item, closeMenu, isShowMenu }) {
   const mainColor = React.useContext(MainColorContext);
   const [hoverStyle, setHoverStyle] = useState(false)

   const handleOnMouseEnter = () => {
      setHoverStyle(true);
   }

   const handleOnMouseLeave = () => {
      setHoverStyle(false);
   }
   const clickHandler = () => {
      if (isShowMenu) {
         return closeMenu()
      }
   }


   return (
      <li className='navItem'
         onMouseEnter={handleOnMouseEnter}
         onMouseLeave={handleOnMouseLeave}
         style={hoverStyle ? { color: mainColor } : null}

      >
         <Link activeStyle={{ color: mainColor }} smooth spy to={item} offset={-70}>
            <h4 onClick={clickHandler}>
               {item}
            </h4>
         </Link>
      </li >
   )
}

export default NavBarItem