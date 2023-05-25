import IconBtn from "../iconBtn/IconBtn";
import { contacts } from "../../constants/headerData";
import "./contactIcons.scss";

function ContactIcons() {
  return (
    <div className="contacts">
      {contacts.map((item, index) => (
        <IconBtn item={item} key={index} />
      ))}
    </div>
  );
}

export default ContactIcons;
