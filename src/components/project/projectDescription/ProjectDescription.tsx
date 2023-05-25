import IconBtn from "../../iconBtn/IconBtn";
import linkIcon from "../../../assets/icon/external_link.png";
import gitIcon from "../../../assets/icon/github-mark.png";
import { BASE_GIT_LINK, BASE_LINK } from "../../../constants/url";
import { ProjectData } from "../../../constants/portfolioSectionData";
import "./projectDescription.scss";

interface ProjectDescriptionProps {
  projectName: string;
  label: string;
  icons: Array<string>;
}

function ProjectDescription({
  projectName,
  label,
  icons,
}: ProjectDescriptionProps) {
  const pageLink = {
    icon: linkIcon,
    label: label,
    type: "link",
    link: `${BASE_LINK}${label}`,
  };
  const gitLink = {
    icon: gitIcon,
    label: label,
    type: "link",
    link: `${BASE_GIT_LINK}${label}`,
  };

  return (
    <div className="projectDescription">
      <h3 className="projectTitle">{projectName}</h3>
      <ul className="projectTechList">
        {icons.map((icon, index) => (
          <li key={index}>
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>
      <div className="links">
        <IconBtn item={pageLink} />
        <IconBtn item={gitLink} />
      </div>
    </div>
  );
}

export default ProjectDescription;
