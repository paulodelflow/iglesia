// src/components/animation/animation.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const lightShift = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(5deg) scale(1.1);
  }
`;

const ChurchWindow = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: 
    radial-gradient(circle at center, rgba(255,200,100,0.3) 0%, rgba(255,160,60,0.1) 35%, transparent 70%),
    radial-gradient(circle at 20% 20%, rgba(255,180,80,0.2) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(255,220,120,0.2) 0%, transparent 40%);
  animation: ${lightShift} 20s infinite alternate;
`;

const ChurchBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ChurchWindow />
    </div>
  );
};

// Exporta tanto ChurchBackground como formAnimation si es necesario
export default ChurchBackground;

export const formAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
