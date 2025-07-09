"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ children, className }:any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,  
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        ${className || ''} 
      `}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;