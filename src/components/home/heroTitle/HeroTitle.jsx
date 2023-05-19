import React from 'react';
import './heroTitle.scss';

function HeroTitle({ color }) {
   return (
      <div className="heroTitle">
         <h2>Hi, I am</h2>
         <div className='title heroTitleName'>
            <h1> Valery</h1>
            <h1>Lytvyn</h1>
         </div>
         <h2 className='profession'
            style={{
               borderBottom: `2px solid ${color}`
            }}
         >Front End Developer</h2>
      </div>
   )
}

export default HeroTitle