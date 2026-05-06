import React, { useEffect, useState, useRef } from 'react';

const symbols = ['*', '✧', '♡', '☆', '·', '°', '○', '✦', '⋆', '♪', '☁', '∘'];

const FloatingDoodle = ({ symbol, index }) => {
  const style = {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 20}s`,
    fontSize: `${12 + Math.random() * 16}px`,
    opacity: 0.08 + Math.random() * 0.12
  };

  return (
    <span
      className="floating-doodle absolute text-white pointer-events-none select-none"
      style={style}
    >
      {symbol}
    </span>
  );
};

const Star = ({ index }) => {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 4}s`,
    animationDuration: `${2 + Math.random() * 3}s`
  };

  return (
    <span
      className="star absolute text-white text-[2px] pointer-events-none select-none"
      style={style}
    >
      ·
    </span>
  );
};

const ParticleBackground = () => {
  const [doodles] = useState(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)]
    }))
  );

  const [stars] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({ id: i }))
  );

  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add parallax effect to container
      if (containerRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
      data-testid="particle-background"
    >
      {/* Stars layer */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <Star key={star.id} index={star.id} />
        ))}
      </div>

      {/* Floating doodles layer */}
      <div 
        ref={containerRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        {doodles.map((doodle) => (
          <FloatingDoodle
            key={doodle.id}
            symbol={doodle.symbol}
            index={doodle.id}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/20 pointer-events-none" />
    </div>
  );
};

export default ParticleBackground;
