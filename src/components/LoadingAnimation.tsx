import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import kundleeLogo from "@/assets/kundlee-secondary-logo.png";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-warm-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.5 : 0 }}
    >
      <div className="relative w-32 h-32">
        {/* Outer rotating circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 3, 
            ease: "linear",
            repeat: Infinity 
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--saffron))"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </motion.svg>

        {/* Middle pulsing circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="hsl(var(--saffron))"
            strokeWidth="1.5"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1, 0.8],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.svg>

        {/* Inner drawing circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          initial={{ rotate: -90 }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            stroke="hsl(var(--saffron))"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ 
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.svg>

        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-saffron"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
