import React from 'react';
import './projectDescription.scss';
import MotionComponent from '../../motionComponent/MotionComponent';
import { opacityVariant } from '../../../constants/constant';
import IconBtn from '../../iconBtn/IconBtn';
import linkIcon from '../../../assets/icon/external_link.png';
import gitIcon from '../../../assets/icon/github-mark.png';
import { BASE_GIT_LINK, BASE_LINK } from '../../../constants/url';

function ProjectDescription({ id, label, icons }) {
   const pageLink = {
      icon: linkIcon, label: label, type: 'link', link: `${BASE_LINK}${label}`
   }
   const gitLink = {
      icon: gitIcon, label: label, type: 'link', link: `${BASE_GIT_LINK}${label}`
   }

   return (
      // <MotionComponent content={
      <div className="projectDescription">
         <h3 className="projectTitle">{label}</h3>
         <ul className="projectTechList">
            {icons.map((icon, index) => (
               <li key={index}>
                  <img src={icon} alt="icon" />
               </li>
            ))
            }
         </ul>
         <div className="links">
            <IconBtn item={pageLink} />
            <IconBtn item={gitLink} />
         </div>
      </div>
      // }
      //    key={label}
      //    variant={opacityVariant} />
   )
}

export default ProjectDescription