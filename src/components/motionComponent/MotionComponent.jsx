import React, { useEffect } from 'react';
import { motion, useAnimation, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




function MotionComponent({ content, variant }) {
   const control = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         control.start("visible");
      } else {
         control.start("hidden");
      }
   }, [control, inView]);


   return (
      <motion.div
         ref={ref}
         variants={variant}
         initial="hidden"
         animate={control}
      >
         {content}
      </motion.div>
   )
}

export default MotionComponent