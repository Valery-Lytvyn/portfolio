import React from 'react';

import './about.scss';
import { MainColorContext } from '../../App';
import Skills from './skills/Skills';
import MotionComponent from '../motionComponent/MotionComponent';
import { opacityVariant, leftHorizontalVariant } from '../../constants/constant';


function About() {
   const mainColor = React.useContext(MainColorContext);

   return (
      <section className='about'>
         <div className="container">
            <div className="title">
               <MotionComponent
                  content={<h2>
                     About me
                  </h2>} variant={leftHorizontalVariant}
               />
            </div>
            <div className="aboutContent">
               <Skills color={mainColor} />
               <div className="aboutText" style={{ borderTop: `10px solid ${mainColor}` }}>
                  <MotionComponent
                     content={
                        <h5>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nobis eaque perspiciatis quos quam provident officia, facilis culpa dicta illum error, eius rem quae voluptas tempore possimus ad tempora. Aperiam?
                           Officia ducimus nisi qui eaque fugiat pariatur sit architecto dicta a! Officiis, velit sapiente expedita quisquam quos, eius nesciunt magnam modi quae cumque soluta adipisci quas dolorem incidunt sed doloremque.
                           Cupiditate doloribus, illo voluptate ratione unde enim nesciunt ad non eos mollitia aliquid laborum nisi consequatur perferendis tempora dolores ut, repellendus facere laudantium optio aut corporis! Quia eveniet sequi delectus.
                        </h5>
                     }
                     variant={opacityVariant}
                  />
               </div>


            </div>
         </div>
      </section >
   )
}

export default About