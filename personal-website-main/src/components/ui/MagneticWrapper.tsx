import { motion } from "motion/react";
import { useMagnetic } from "../../hooks/useMagnetic";
import type { ReactNode } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

const MagneticWrapper = ({ children, className, strength }: MagneticWrapperProps) => {
  const { ref, springX, springY, onMouseMove, onMouseLeave } =
    useMagnetic<HTMLDivElement>(strength);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
