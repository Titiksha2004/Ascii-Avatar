import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { hairstyles, eyes, noses, mouths, accessories, outfits } from '../data/asciiParts';

const ASCIICharacter = ({ 
  character, 
  isBlinking, 
  onBlink,
  size = 'large',
  showGlow = true 
}) => {
  const [localBlinking, setLocalBlinking] = useState(false);

  // Internal blinking logic if no external control
  useEffect(() => {
    if (onBlink) return;

    const blinkInterval = setInterval(() => {
      setLocalBlinking(true);
      setTimeout(() => setLocalBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, [onBlink]);

  const blinkState = onBlink ? isBlinking : localBlinking;

  const buildCharacter = useMemo(() => {
    const {
      hairstyle = 'wavy',
      eyeStyle = 'normal',
      nose = 'small',
      mouth = 'smile',
      accessory = 'none',
      outfit = 'tshirt'
    } = character;

    const hair = hairstyles[hairstyle] || hairstyles.wavy;
    const eyeData = eyes[eyeStyle] || eyes.normal;
    const currentEyes = blinkState ? eyeData.blink : eyeData.open;
    const noseArt = noses[nose]?.art || noses.small.art;
    const mouthArt = mouths[mouth]?.art || mouths.smile.art;
    const acc = accessories[accessory] || accessories.none;
    const outfitData = outfits[outfit] || outfits.tshirt;

    // Build the detailed character with hair flowing around face
    let lines = [];
    
    // Head accessory (hat, beanie, etc)
    if (acc.type === 'head') {
      acc.art.split('\n').forEach(line => lines.push(line));
    }
    
    // Hair top section
    hair.top.split('\n').forEach(line => lines.push(line));
    
    // Get hair side lines
    const hairSideLines = hair.sides ? hair.sides.split('\n') : [];
    const hairBottomLines = hair.bottom ? hair.bottom.split('\n') : [];
    
    // Face with integrated hair sides
    // Row 1: Face top
    const faceTop = `     .-'           '-.     `;
    if (hairSideLines[0]) {
      // Merge hair sides with face
      lines.push(faceTop);
    } else {
      lines.push(faceTop);
    }
    
    // Row 2: Eyes
    lines.push(`    |${currentEyes}|`);
    
    // Row 3: Nose  
    lines.push(`    |${noseArt}|`);
    
    // Row 4: Mouth
    lines.push(`    |${mouthArt}|`);
    
    // Row 5: Face bottom
    lines.push(`     '-._         _.-'     `);
    
    // Hair bottom if exists
    if (hairBottomLines.length > 0) {
      hairBottomLines.forEach(line => {
        if (line.trim()) lines.push(line);
      });
    }
    
    // Neck
    lines.push(`         |       |         `);
    
    // Neck accessory or standard neck
    if (acc.type === 'neck') {
      lines.push(`        ${acc.art}        `);
    } else {
      lines.push(`          \\_   _/          `);
    }
    
    // Outfit
    outfitData.art.split('\n').forEach(line => {
      if (line.trim()) lines.push(line);
    });

    return lines.join('\n');
  }, [character, blinkState]);

  const sizeClasses = {
    small: 'text-[7px] sm:text-[8px]',
    medium: 'text-[8px] sm:text-[10px] md:text-[11px]',
    large: 'text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]'
  };

  return (
    <motion.div
      className="relative"
      animate={{
        scaleY: [1, 1.003, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      data-testid="ascii-character"
    >
      <pre 
        className={`
          font-primary whitespace-pre leading-[1.15] text-center text-white/90
          ${sizeClasses[size]}
          ${showGlow ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]' : ''}
        `}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {buildCharacter}
      </pre>
      
      {showGlow && (
        <div 
          className="absolute inset-0 blur-xl opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)'
          }}
        />
      )}
    </motion.div>
  );
};

export default ASCIICharacter;
