import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import GeneratorSection from './components/GeneratorSection';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import ParticleBackground from './components/ParticleBackground';
import { useSoundEffects } from './hooks/useSound';
import { personalityTraits, hobbies, aesthetics } from './data/asciiParts';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [triggerSurprise, setTriggerSurprise] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const { playSound, setEnabled, initAudio } = useSoundEffects();

  // Character state
  const [character, setCharacter] = useState({
    hairstyle: 'wavy',
    eyeStyle: 'normal',
    nose: 'small',
    mouth: 'smile',
    accessory: 'none',
    outfit: 'tshirt',
    mood: 'happy',
    pose: 'standing'
  });

  // Personality state
  const [personality, setPersonality] = useState({
    traits: ['night owl', 'pixel artist', 'cozy homebody'],
    aesthetic: 'cyber cute',
    hobby: 'coding at 3am',
    stats: {
      cuteness: 8,
      dreaminess: 7,
      chaos: 5,
      cozy: 9
    }
  });

  // Update sound enabled state
  useEffect(() => {
    setEnabled(soundEnabled);
  }, [soundEnabled, setEnabled]);

  // Initialize audio on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [initAudio]);

  const handleStartCreating = useCallback(() => {
    setTriggerSurprise(false);
    setCurrentSection('generator');
    setTimeout(() => {
      document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleSurpriseMe = useCallback(() => {
    setTriggerSurprise(true);
    setCurrentSection('generator');
    setTimeout(() => {
      document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handlePlaySound = useCallback((type) => {
    if (soundEnabled) {
      playSound(type);
    }
  }, [soundEnabled, playSound]);

  return (
    <div 
      className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
      data-testid="app-container"
    >
      {/* CRT Scanlines Overlay */}
      <div className="crt-scanlines" />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onStartCreating={handleStartCreating}
          onSurpriseMe={handleSurpriseMe}
          playSound={handlePlaySound}
        />

        {/* Generator Section */}
        <GeneratorSection
          character={character}
          setCharacter={setCharacter}
          personality={personality}
          setPersonality={setPersonality}
          playSound={handlePlaySound}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          initialSurprise={triggerSurprise}
        />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
