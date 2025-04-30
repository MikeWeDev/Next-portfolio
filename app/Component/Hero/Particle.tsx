import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const NUM_PARTICLES = 50;

const generateParticle = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 10 + 5}s`,
  color: ["#3e64ff", "#00c9ff", "#92FE9D"][Math.floor(Math.random() * 3)],
});

const SimpleParticles: React.FC<{ className?: string }> = ({ className }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: NUM_PARTICLES }, generateParticle));
  }, []);

  return (
    <div className={twMerge("absolute inset-0 overflow-hidden z-0", className)}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        ></span>
      ))}
    </div>
  );
};

export default SimpleParticles;
