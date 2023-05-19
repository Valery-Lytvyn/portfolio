import React, { useContext, useEffect, useState } from 'react';
import heroPhoto from '../../assets/images/mainPhoto.png';
import { MainColorContext } from '../../App';
import { motion } from 'framer-motion';
import './home.scss';
import MotionComponent from '../motionComponent/MotionComponent';
import HeroTitle from './heroTitle/HeroTitle';
import { opacityVariant, verticalVariant } from '../../constants/constant';

function Home() {
   const mainColor = React.useContext(MainColorContext);
   // const [isShowTitle, setIsShowTitle] = useState(true);

   // useEffect(() => {
   //    const timer = setTimeout(() => setIsShowTitle(false), 2000);
   //    return () => clearTimeout(timer);
   // }, [])
   // useEffect(() => {
   //    if (!isShowTitle) {
   //       const timer = setTimeout(() => setIsShowTitle(true), 500);
   //       return () => clearTimeout(timer);
   //    }
   // }, [isShowTitle])



   return (
      <section className='home'>
         <div className="container">
            <MotionComponent content={<HeroTitle color={mainColor} />} variant={verticalVariant} />
            < div className="heroImg">
               <MotionComponent content={<img src={heroPhoto} alt="hero" />} variant={opacityVariant} />
            </div >
         </div >
      </section >
   )
}

export default Home