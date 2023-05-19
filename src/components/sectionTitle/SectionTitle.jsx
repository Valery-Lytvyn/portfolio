import React from 'react'
import MotionComponent from '../motionComponent/MotionComponent';
import './sectionTitle.scss'

function SectionTitle({ title, variant, subTitle }) {
   return (
      <div className="titleWrap">
         <div className="title">
            <MotionComponent
               content={<h2>
                  {title}
               </h2>} variant={variant}
            />
         </div>
         <div className="subTitle" >
            <h4>
               {subTitle}
            </h4>
         </div>
      </div>
   )
}

export default SectionTitle