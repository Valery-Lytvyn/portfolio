import React from 'react';
import './portfolio.scss';
import { verticalVariant } from '../../constants/constant';
import { MainColorContext } from '../../App';
import Project from '../project/Project';
import SectionTitle from '../sectionTitle/SectionTitle';
import { projects } from '../../constants/projectsData';


function Portfolio() {
   const mainColor = React.useContext(MainColorContext);


   return (
      <section className='portfolio'>
         <div className="container">
            <SectionTitle
               title={'My works'}
               variant={verticalVariant}
               subTitle={" Each project contains a little code, a lot of time spent and even more soul invested :) "}
            />
            <div className="portfolioContent">
               {projects.map(project => (
                  <Project project={project} color={mainColor} key={project.id} />
               ))}
            </div>
         </div>
      </section >
   )
}

export default Portfolio
