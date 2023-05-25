import { useState } from "react";
import NavBarList from "../navBarList/NavBarList";
import closeBtn from "../../../assets/icon/close_white.png";
import burger from "../../../assets/icon/burger_menu_white.png";
import "./hamburgerMenu.scss";

function HamburgerMenu() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const openMenu = () => {
    setIsShowMenu(true);
  };

  const closeMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <div className="hamburgerMenu">
      {isShowMenu ? (
        <>
          <button
            className="hamburgerMenuBtn"
            onClick={closeMenu}
            aria-label="close hamburger menu"
          >
            <img src={closeBtn} alt="close hamburger menu" />
          </button>
          <div className="modalRear" onClick={closeMenu}>
            <NavBarList closeMenu={closeMenu} isShowMenu={isShowMenu} />
          </div>
        </>
      ) : (
        <button
          className="hamburgerMenuBtn"
          aria-label="open hamburger menu"
          onClick={openMenu}
        >
          <img src={burger} alt="open hamburger menu" />
        </button>
      )}
    </div>
  );
}

export default HamburgerMenu;
