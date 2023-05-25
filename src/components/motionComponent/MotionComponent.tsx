import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MotionComponentProps {
  content: any;
  variant: any;
}

function MotionComponent({ content, variant }: MotionComponentProps) {
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
      className="motion"
    >
      {content}
    </motion.div>
  );
}

export default MotionComponent;
