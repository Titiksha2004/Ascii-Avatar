import React, { useEffect, useRef } from 'react';

const trailSymbols = ['*', '✧', '·', '°', '✦', '⋆'];

const CursorTrail = () => {
  const trailRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastSpawn = useRef(Date.now());

  useEffect(() => {
    const createTrailElement = (x, y) => {
      const el = document.createElement('span');
      el.className = 'cursor-trail';
      el.textContent = trailSymbols[Math.floor(Math.random() * trailSymbols.length)];
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.opacity = '0.8';
      el.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
      document.body.appendChild(el);

      // Animate and remove
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = `scale(0.3) translateY(-20px)`;
      }, 50);

      setTimeout(() => {
        el.remove();
      }, 600);
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      const now = Date.now();
      if (now - lastSpawn.current > 50) {
        createTrailElement(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        );
        lastSpawn.current = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default CursorTrail;
