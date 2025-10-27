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

  // Create 6 petals positioned in a circle
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60) - 90; // Start from top, 60° apart
    return { id: i, angle };
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-warm-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.5 : 0 }}
    >
      <div className="relative w-20 h-20">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          {petals.map((petal) => {
            const radians = (petal.angle * Math.PI) / 180;
            const x1 = 50 + Math.cos(radians) * 18;
            const y1 = 50 + Math.sin(radians) * 18;
            const x2 = 50 + Math.cos(radians) * 42;
            const y2 = 50 + Math.sin(radians) * 42;

            // Calculate animation timing for sequential glow
            const cycleDuration = 1.8;
            const petalDuration = cycleDuration / 6;
            const delay = petal.id * petalDuration;

            return (
              <motion.line
                key={petal.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ 
                  stroke: "hsl(var(--muted-foreground) / 0.3)"
                }}
                animate={{
                  stroke: [
                    "hsl(var(--muted-foreground) / 0.3)",
                    "hsl(var(--muted-foreground) / 0.3)",
                    "hsl(var(--saffron))",
                    "hsl(var(--saffron))",
                    "hsl(var(--muted-foreground) / 0.3)"
                  ],
                  filter: [
                    "drop-shadow(0 0 0px transparent)",
                    "drop-shadow(0 0 0px transparent)",
                    "drop-shadow(0 0 12px hsl(var(--saffron) / 0.8))",
                    "drop-shadow(0 0 12px hsl(var(--saffron) / 0.8))",
                    "drop-shadow(0 0 0px transparent)"
                  ]
                }}
                transition={{
                  duration: cycleDuration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.25, 0.35, 0.5]
                }}
              />
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
