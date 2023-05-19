import React, { useState } from 'react';
import { motion, useAnimation, } from 'framer-motion';
import './skill.scss';
import MotionComponent from '../../motionComponent/MotionComponent';
import { leftHorizontalVariant } from '../../../constants/constant';

function Skill({ skill, color }) {
   const [hoverStyle, setHoverStyle] = useState(false)

   return (
      <>
         <MotionComponent
            content={
               <li className="skill" key={skill}
                  style={hoverStyle ? { color: color, textShadow: `3px 0px 2px #000` } : { boxShadow: `-1px 1px 1px ${color}` }}
                  onMouseEnter={() => setHoverStyle(true)}
                  onMouseLeave={() => setHoverStyle(false)}
               >
                  <span >
                     {skill}
                  </span>
               </li>}
            variant={leftHorizontalVariant}
         />
      </>
   )
}

export default Skill