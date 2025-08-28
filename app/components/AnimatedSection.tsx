'use client'
import { useAnimation, useInView, motion } from "motion/react";
import { useRef, useEffect } from "react";

import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};