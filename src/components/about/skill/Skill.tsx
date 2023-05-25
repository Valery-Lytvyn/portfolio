import { useState } from "react";
import MotionComponent from "../../motionComponent/MotionComponent";
import { scaleVariant } from "../../../constants/motionComponentData";
import "./skill.scss";

interface SkillProps {
  skill: string;
  color: string;
}

function Skill({ skill, color }: SkillProps) {
  const [hoverStyle, setHoverStyle] = useState(false);

  return (
    <>
      <MotionComponent
        content={
          <li
            className="skill"
            key={skill}
            style={
              hoverStyle
                ? {
                    color: color,
                    textShadow: `3px 0px 2px #000`,
                    boxShadow: `0px 0px 5px ${color}`,
                  }
                : { boxShadow: `-1px 1px 1px ${color}` }
            }
            onMouseEnter={() => setHoverStyle(true)}
            onMouseLeave={() => setHoverStyle(false)}
          >
            <span>{skill}</span>
          </li>
        }
        variant={scaleVariant}
      />
    </>
  );
}

export default Skill;
