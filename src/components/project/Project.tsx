import { useEffect, useState } from "react";
import {
  leftHorizontalVariant,
  rightHorizontalVariant,
} from "../../constants/motionComponentData";
import MotionComponent from "../motionComponent/MotionComponent";
import "./project.scss";
import ProjectDescription from "./projectDescription/ProjectDescription";
import { useMediaQuery } from "react-responsive";
import { BASE_LINK } from "../../constants/url";
import { openPage } from "../../services";
import { ProjectData } from "../../constants/portfolioSectionData";

interface ProjectProps {
  project: ProjectData;
  color: string;
}

function Project({ project, color }: ProjectProps) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isTouchscreen, setIsTouchscreen] = useState(false);
  const { id, picture, smallPicture, label, projectName, icons } = project;
  const movementDirection = id % 2 === 0 ? "right" : "left";

  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      setIsTouchscreen(true);
    }
  }, []);

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 576px)",
  });

  const link = `${BASE_LINK}${label}`;

  return (
    <MotionComponent
      content={
        <div
          className="projectWrap"
          style={
            isMouseEnter ? { boxShadow: `-1px 1px 1px ${color}` } : undefined
          }
          onMouseEnter={() => setIsMouseEnter(true)}
          onMouseLeave={() => setIsMouseEnter(false)}
        >
          <div className="project">
            <div
              className="projectImg"
              onClick={() => !isTouchscreen && openPage(link, label)}
            >
              <img src={isMobileDevice ? picture : smallPicture} alt={label} />
            </div>
            {isMouseEnter && (
              <ProjectDescription
                label={label}
                icons={icons}
                projectName={projectName}
              />
            )}
          </div>
        </div>
      }
      key={id}
      variant={
        movementDirection === "right"
          ? rightHorizontalVariant
          : leftHorizontalVariant
      }
    />
  );
}

export default Project;
