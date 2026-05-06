import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import ASCIICharacter from './ASCIICharacter';
import CustomizationPanel from './CustomizationPanel';
import PersonalityPanel from './PersonalityPanel';
import { 
  hairstyles, eyes, noses, mouths, accessories, outfits, moods,
  personalityTraits, hobbies, aesthetics 
} from '../data/asciiParts';
import { Download, Copy, Sparkles, Volume2, VolumeX } from 'lucide-react';

const GeneratorSection = ({ 
  character, 
  setCharacter, 
  personality, 
  setPersonality,
  playSound,
  soundEnabled,
  setSoundEnabled,
  initialSurprise = false
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [copied, setCopied] = useState(false);
  const characterRef = useRef(null);

  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      if (playSound) playSound('blink');
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, [playSound]);

  // Initial surprise if coming from hero
  useEffect(() => {
    if (initialSurprise) {
      handleSurprise();
    }
  }, []);

  const getRandomItem = (obj) => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const generateRandomPersonality = () => {
    const traits = [];
    const traitCount = 3 + Math.floor(Math.random() * 2);
    const shuffled = [...personalityTraits].sort(() => Math.random() - 0.5);
    for (let i = 0; i < traitCount; i++) {
      traits.push(shuffled[i]);
    }

    return {
      traits,
      aesthetic: aesthetics[Math.floor(Math.random() * aesthetics.length)],
      hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
      stats: {
        cuteness: Math.floor(Math.random() * 4) + 7,
        dreaminess: Math.floor(Math.random() * 5) + 5,
        chaos: Math.floor(Math.random() * 8) + 2,
        cozy: Math.floor(Math.random() * 4) + 6
      }
    };
  };

  const handleSurprise = () => {
    if (playSound) playSound('surprise');
    setShowGlitch(true);

    setTimeout(() => {
      setCharacter({
        hairstyle: getRandomItem(hairstyles),
        eyeStyle: getRandomItem(eyes),
        nose: getRandomItem(noses),
        mouth: getRandomItem(mouths),
        accessory: getRandomItem(accessories),
        outfit: getRandomItem(outfits),
        mood: getRandomItem(moods),
        pose: 'standing'
      });
      setPersonality(generateRandomPersonality());
      setShowGlitch(false);
    }, 400);
  };

  const buildASCIIText = () => {
    const hair = hairstyles[character.hairstyle] || hairstyles.wavy;
    const eyeData = eyes[character.eyeStyle] || eyes.normal;
    const currentEyes = eyeData.open;
    const noseArt = noses[character.nose]?.art || noses.small.art;
    const mouthArt = mouths[character.mouth]?.art || mouths.smile.art;
    const acc = accessories[character.accessory] || accessories.none;
    const outfitArt = outfits[character.outfit]?.art || outfits.tshirt.art;

    let ascii = '';
    
    // Head accessory
    if (acc.type === 'head') {
      ascii += acc.art + '\n';
    }
    
    // Hair top
    ascii += hair.top + '\n';
    
    // Face
    ascii += `     .-'           '-.     \n`;
    ascii += `    |${currentEyes}|\n`;
    ascii += `    |${noseArt}|\n`;
    ascii += `    |${mouthArt}|\n`;
    ascii += `     '-._         _.-'     \n`;
    
    // Neck
    ascii += `         |       |         \n`;
    if (acc.type === 'neck') {
      ascii += `       ${acc.art}       \n`;
    } else {
      ascii += `          \\_   _/          \n`;
    }
    
    // Outfit
    ascii += outfitArt;

    return ascii;
  };

  const handleDownloadImage = async () => {
    if (playSound) playSound('click');
    
    if (characterRef.current) {
      try {
        const canvas = await html2canvas(characterRef.current, {
          backgroundColor: '#050505',
          scale: 2
        });
        const link = document.createElement('a');
        link.download = 'ascii-human.png';
        link.href = canvas.toDataURL();
        link.click();
      } catch (err) {
        console.error('Failed to download image:', err);
      }
    }
  };

  const handleDownloadText = () => {
    if (playSound) playSound('click');
    
    const asciiText = buildASCIIText();
    const blob = new Blob([asciiText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = 'ascii-human.txt';
    link.href = URL.createObjectURL(blob);
    link.click();
    // Defer revocation to avoid race condition
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
  };

  const handleCopy = async () => {
    if (playSound) playSound('boop');
    
    const asciiText = buildASCIIText();
    
    try {
      await navigator.clipboard.writeText(asciiText);
      setCopied(true);
    } catch (err) {
      // Fallback for environments where clipboard API is blocked
      try {
        const textarea = document.createElement('textarea');
        textarea.value = asciiText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
      } catch (fallbackErr) {
        console.error('Copy failed:', fallbackErr);
        // Still show feedback but with different text
        setCopied(false);
        return;
      }
    }
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      className="min-h-screen py-12 px-4 relative"
      id="generator"
      data-testid="generator-section"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-secondary text-3xl sm:text-4xl glow-text mb-2">
          CHARACTER LAB
        </h2>
        <p className="text-white/50 text-sm tracking-wider">
          Assemble your digital soul
        </p>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Panel - Customization */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CustomizationPanel 
            character={character} 
            setCharacter={setCharacter}
            playSound={playSound}
          />
        </motion.div>

        {/* Center Stage - Character Display */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Glitch overlay */}
          <AnimatePresence>
            {showGlitch && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-white/30 text-6xl font-primary animate-glitch">
                  {'░▒▓█'.repeat(8)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Character container */}
          <div 
            ref={characterRef}
            className="glass-panel p-8 mb-6 min-h-[300px] flex items-center justify-center relative"
            data-testid="character-display"
          >
            <motion.div
              animate={showGlitch ? { x: [-2, 2, -2, 0], opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <ASCIICharacter 
                character={character}
                isBlinking={isBlinking}
                size="large"
                showGlow={true}
              />
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 text-white/20 text-xs">┌</div>
            <div className="absolute top-2 right-2 text-white/20 text-xs">┐</div>
            <div className="absolute bottom-2 left-2 text-white/20 text-xs">└</div>
            <div className="absolute bottom-2 right-2 text-white/20 text-xs">┘</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSurprise}
              onMouseEnter={() => playSound && playSound('swoosh')}
              data-testid="btn-surprise-me"
            >
              <Sparkles size={14} />
              Surprise Me
            </motion.button>

            <motion.button
              className="btn-primary flex items-center gap-2 border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadImage}
              onMouseEnter={() => playSound && playSound('swoosh')}
              data-testid="btn-download-image"
            >
              <Download size={14} />
              PNG
            </motion.button>

            <motion.button
              className="btn-primary flex items-center gap-2 border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadText}
              onMouseEnter={() => playSound && playSound('swoosh')}
              data-testid="btn-download-text"
            >
              <Download size={14} />
              TXT
            </motion.button>

            <motion.button
              className="btn-primary flex items-center gap-2 border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopy}
              onMouseEnter={() => playSound && playSound('swoosh')}
              data-testid="btn-copy"
            >
              <Copy size={14} />
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>

            <motion.button
              className="btn-primary flex items-center gap-2 border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSoundEnabled(!soundEnabled)}
              data-testid="btn-sound-toggle"
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Panel - Personality */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <PersonalityPanel 
            character={character}
            personality={personality}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GeneratorSection;
