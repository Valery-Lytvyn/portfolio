import NavBarItem from "../navBarItem/NavBarItem";
import { navBarData } from "../../../constants/headerData";
import "./navBarList.scss";

interface NavBarListProps {
  closeMenu?: () => void;
  isShowMenu?: boolean;
}

function NavBarList({ closeMenu, isShowMenu }: NavBarListProps | never) {
  return (
    <ul className="navBarList">
      {navBarData.map((item) => (
        <NavBarItem
          item={item}
          key={item}
          closeMenu={closeMenu}
          isShowMenu={isShowMenu}
        />
      ))}
    </ul>
  );
}

export default NavBarList;
