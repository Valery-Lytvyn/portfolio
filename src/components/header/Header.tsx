import React from "react";
import { Link } from "react-scroll";
import NavBar from "../navBar/NavBar";
import ContactIcons from "../contactIcons/ContactIcons";
import ColorSwatch from "../colorSwatch/ColorSwatch";
import { MainColorContext } from "../../App";
import "./header.scss";

interface HeaderProps {
  changeColor: (color: string) => {};
}
function Header({ changeColor }: HeaderProps) {
  const mainColor = React.useContext(MainColorContext) as string;

  return (
    <header className="header">
      <div className="container">
        <Link smooth spy to={"home"}>
          <div className="logo" style={{ color: mainColor }}>
            <h6> React Developer </h6>
          </div>
        </Link>
        <NavBar />
        <ContactIcons />
      </div>
      <ColorSwatch changeColor={changeColor} />
    </header>
  );
}

export default Header;
