import React from "react";
import { MainColorContext } from "../../App";
import { openPage } from "../../services";
import { ContactsData } from "../../constants/headerData";
import "./iconBtn.scss";

function IconBtn({ item }: { item: ContactsData }) {
  const mainColor = React.useContext(MainColorContext);

  return (
    <button
      className="iconBtn contactIcon"
      aria-label={`link to ${item.label}`}
      style={{ border: `1px solid ${mainColor}` }}
      onClick={() => openPage(item.link, item.label)}
    >
      <img className="iconBtnImg" src={item.icon} alt={`icon${item.label}`} />
    </button>
  );
}

export default IconBtn;
