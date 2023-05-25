import githubIcon from "../assets/icon/github-mark.png";
import linkedinIcon from "../assets/icon/linkedin-mark.svg";
import mailIcon from "../assets/icon/mail-mark.png";

export interface ContactsData {
  icon: string;
  label: string | undefined;
  type: string;
  link: string;
}

export const contacts: Array<ContactsData> = [
  {
    icon: githubIcon,
    label: "github",
    type: "link",
    link: "https://github.com/Valery-Lytvyn",
  },
  {
    icon: linkedinIcon,
    label: "linkedin",
    type: "link",
    link: "https://linkedin.com/in/valery-lytvyn",
  },
  {
    icon: mailIcon,
    label: "mail",
    type: "mail",
    link: "lytvynvalery@gmail.com",
  },
];

export const navBarData: Array<string> = [
  "home",
  "about",
  "portfolio",
  "contact",
];
