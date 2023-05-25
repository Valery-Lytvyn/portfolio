import { skills } from "../../../constants/aboutSectionData";
import Skill from "../skill/Skill";

import "./skills.scss";

function Skills({ color }: { color: string }) {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <Skill skill={skill} color={color} key={skill} />
      ))}
    </ul>
  );
}

export default Skills;
