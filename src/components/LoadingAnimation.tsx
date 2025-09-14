import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import kundleeLogo from '@/assets/kundlee-secondary-logo.png';

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
      <div className="relative">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-24 h-24 relative">
            {/* Circular drawing animation around the logo */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="hsl(var(--saffron))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{
                  strokeDasharray: "251.32",
                  strokeDashoffset: "251.32"
                }}
              />
            </motion.svg>
            
            {/* Logo Image */}
            <div className="absolute inset-2 flex items-center justify-center">
              <img
                src={kundleeLogo}
                alt="Kundlee"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="font-larken text-2xl font-bold text-charcoal uppercase tracking-wider">
            KUNDLEE
          </h1>
          <p className="font-inter text-sm text-charcoal/60 mt-2">
            Clarity for your cosmic path
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center mt-6 space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-saffron rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;