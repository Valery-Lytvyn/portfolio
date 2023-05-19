import React, { useState } from 'react';
import './skills.scss'
import Skill from '../skill/Skill';

const skills = [
   'HTML', 'CSS/SCSS', 'JS', 'BOOTSTRAP', 'REDUX', 'REACT',]
function Skills({ color }) {


   return (
      <ul className="skills">
         {skills.map(skill => (
            <Skill skill={skill} color={color} key={skill} />
         ))}
      </ul>
   )
}

export default Skills