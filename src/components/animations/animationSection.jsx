// components/AnimatedSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export const AnimatedSection = ({
  children,
  direction = "up", // 'up', 'down', 'left', 'right'
  duration = 0.8,
  delay = 0,
  threshold = 0.3,
  className = "",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  const directionVariants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  };

  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
};
