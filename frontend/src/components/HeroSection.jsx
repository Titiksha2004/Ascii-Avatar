import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ASCIICharacter from './ASCIICharacter';

const HeroSection = ({ onStartCreating, onSurpriseMe, playSound }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3500);
    return () => clearInterval(blinkInterval);
  }, []);

  const heroCharacter = {
    hairstyle: 'wavy',
    eyeStyle: 'normal',
    nose: 'small',
    mouth: 'smile',
    accessory: 'none',
    outfit: 'vneck',
    mood: 'dreamy'
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      data-testid="hero-section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-white/10 text-4xl font-secondary"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ✧
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-white/10 text-3xl font-secondary"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        ♡
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-white/10 text-2xl font-secondary"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
      >
        ☆
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* ASCII Character Display */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative inline-block">
            <ASCIICharacter 
              character={heroCharacter} 
              isBlinking={isBlinking}
              size="large"
              showGlow={true}
            />
            {/* Terminal glow effect */}
            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full -z-10" />
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1
          className="font-secondary text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-4 glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Build tiny humans from
          <br />
          <span className="text-white/80">symbols and soul.</span>
        </motion.h1>

        <motion.p
          className="text-white/50 text-sm sm:text-base tracking-wider mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Customize dreamy ASCII people with endless personality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="btn-primary min-w-[200px]"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (playSound) playSound('click');
              onStartCreating();
            }}
            onMouseEnter={() => playSound && playSound('swoosh')}
            data-testid="btn-start-creating"
          >
            Start Creating
          </motion.button>

          <motion.button
            className="btn-primary min-w-[200px] border-white/20"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (playSound) playSound('surprise');
              onSurpriseMe();
            }}
            onMouseEnter={() => playSound && playSound('swoosh')}
            data-testid="btn-surprise-me-hero"
          >
            ✧ Surprise Me ✧
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/30 text-xs tracking-widest uppercase">
          scroll to explore
        </div>
        <div className="text-center text-white/30 mt-2">↓</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
