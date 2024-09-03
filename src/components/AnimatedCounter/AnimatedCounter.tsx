"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = targetNumber / (duration / 16);

      const animateCount = () => {
        start += increment;
        if (start < targetNumber) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animateCount);
        } else {
          setCount(targetNumber);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [inView, targetNumber, duration]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
