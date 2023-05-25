import React from "react";
import { MainColorContext } from "../../App";
import Skills from "./skills/Skills";
import MotionComponent from "../motionComponent/MotionComponent";
import { scaleVariant } from "../../constants/motionComponentData";
import TitleComponent from "../titleComponent/TitleComponent";
import { aboutTextData } from "../../constants/aboutSectionData";
import "./about.scss";

function About() {
  const mainColor = React.useContext(MainColorContext) as string;

  return (
    <section className="about">
      <div className="container">
        <TitleComponent
          title={aboutTextData.title}
          subTitle={aboutTextData.subtitle}
        />
        <div className="aboutContent">
          <div
            className="aboutText"
            style={{ borderTop: `10px solid ${mainColor}` }}
          >
            {aboutTextData.summary.map((paragraph, index) => (
              <div key={index}>
                <MotionComponent
                  content={<p className="paragraph">{paragraph}</p>}
                  variant={scaleVariant}
                />
              </div>
            ))}
          </div>
          <Skills color={mainColor} />
        </div>
      </div>
    </section>
  );
}

export default About;
