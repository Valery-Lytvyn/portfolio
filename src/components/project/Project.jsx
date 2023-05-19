import React, { useState } from 'react'
import { leftHorizontalVariant, rightHorizontalVariant } from '../../constants/constant'
import MotionComponent from '../motionComponent/MotionComponent';
// import pic from '../../assets/images/3-D_portfolio.webp'
import './project.scss';
import ProjectDescription from './projectDescription/ProjectDescription';
import { useMediaQuery } from 'react-responsive';
import { BASE_LINK } from '../../constants/url';
import { openPage } from '../../services';

function Project({ project, color }) {
   const [isMouseEnter, setIsMouseEnter] = useState(false);
   const { id, picture, smallPicture, label, icons } = project

   const isMobileDevice = useMediaQuery({
      query: "(min-device-width: 576px)",
   });

   const link = `${BASE_LINK}${label}`;

   return (
      <MotionComponent content={
         <div className="projectWrap"
            style={isMouseEnter ? { boxShadow: `-1px 1px 1px ${color}` } : null}
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
         >
            <div className="project">
               <div className="projectImg" onClick={() => openPage(link, label)}>
                  <img src={isMobileDevice ? picture : smallPicture} alt={label} />
               </div>
               {isMouseEnter &&
                  <ProjectDescription id={id} label={label} icons={icons} />
               }
            </div>
         </ div>
      }
         key={id}
         variant={id % 2 === 0 ? rightHorizontalVariant : leftHorizontalVariant} />
   )
}

export default Project