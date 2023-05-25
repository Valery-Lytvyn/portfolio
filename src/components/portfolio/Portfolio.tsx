import React from "react";
import { MainColorContext } from "../../App";
import Project from "../project/Project";
import TitleComponent from "../titleComponent/TitleComponent";
import {
  portfolioTextData,
  projects,
} from "../../constants/portfolioSectionData";
import "./portfolio.scss";

function Portfolio() {
  const mainColor = React.useContext(MainColorContext) as string;

  return (
    <section className="portfolio">
      <div className="container">
        <TitleComponent
          title={portfolioTextData.title}
          subTitle={portfolioTextData.subtitle}
        />
        <div className="portfolioContent">
          {projects.map((project) => (
            <Project project={project} color={mainColor} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
