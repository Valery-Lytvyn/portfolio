import React, { useState } from "react";
import { MainColorContext } from "../../../App";
import { Link } from "react-scroll";
import "./navBarItem.scss";

interface NavBarItemProps {
  item: string;
  closeMenu?: () => void;
  isShowMenu?: boolean;
}

function NavBarItem({ item, closeMenu, isShowMenu }: NavBarItemProps) {
  const mainColor = React.useContext(MainColorContext) as string;
  const [hoverStyle, setHoverStyle] = useState(false);

  const handleOnMouseEnter = () => {
    setHoverStyle(true);
  };

  const handleOnMouseLeave = () => {
    setHoverStyle(false);
  };

  return (
    <li
      className="navItem"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      style={hoverStyle ? { color: mainColor } : undefined}
    >
      <Link
        activeStyle={{ color: mainColor }}
        smooth
        spy
        to={item}
        offset={-70}
      >
        <h4 onClick={isShowMenu ? closeMenu : undefined}>{item}</h4>
      </Link>
    </li>
  );
}

export default NavBarItem;
