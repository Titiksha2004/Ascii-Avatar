import React from 'react';
import { motion } from 'framer-motion';
import { moods } from '../data/asciiParts';

const StatBar = ({ label, value, max = 10 }) => {
  const filled = Math.round((value / max) * 10);
  const empty = 10 - filled;
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] uppercase tracking-widest text-white/60">{label}</span>
        <span className="text-[10px] text-white/40">{value}/{max}</span>
      </div>
      <div className="font-primary text-sm tracking-[0.15em] text-white/80">
        [{'|'.repeat(filled)}{'.'.repeat(empty)}]
      </div>
    </div>
  );
};

const TraitTag = ({ trait }) => (
  <motion.span
    className="inline-block px-2 py-1 text-[10px] uppercase tracking-wider 
               border border-white/20 text-white/70 mr-2 mb-2
               hover:border-white/40 hover:bg-white/5 transition-all cursor-default"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {trait}
  </motion.span>
);

const PersonalityPanel = ({ character, personality }) => {
  const moodData = moods[character.mood] || moods.happy;
  
  return (
    <div 
      className="terminal-card h-full flex flex-col"
      data-testid="personality-panel"
    >
      <div className="mb-4">
        <h2 className="font-secondary text-2xl glow-text tracking-wider">
          PERSONALITY
        </h2>
        <p className="text-xs text-white/50 tracking-widest uppercase mt-1">
          Soul statistics
        </p>
      </div>

      {/* Mood Display */}
      <div className="glass-panel mb-4">
        <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">
          Current Mood
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{moodData.emoji}</span>
          <span className="font-secondary text-xl text-white/90">{moodData.name}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-4">
        <StatBar label="Cuteness" value={personality.stats?.cuteness || 8} />
        <StatBar label="Dreaminess" value={personality.stats?.dreaminess || 7} />
        <StatBar label="Chaos" value={personality.stats?.chaos || 5} />
        <StatBar label="Cozy Level" value={personality.stats?.cozy || 9} />
      </div>

      {/* Traits */}
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
          Traits
        </div>
        <div className="flex flex-wrap">
          {(personality.traits || ['night owl', 'pixel artist', 'cozy homebody']).map((trait, i) => (
            <TraitTag key={i} trait={trait} />
          ))}
        </div>
      </div>

      {/* Aesthetic */}
      {personality.aesthetic && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">
            Aesthetic
          </div>
          <div className="font-secondary text-lg text-white/80">
            {personality.aesthetic}
          </div>
        </div>
      )}

      {/* Fun fact */}
      {personality.hobby && (
        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">
            Enjoys
          </div>
          <div className="text-sm text-white/70 italic">
            "{personality.hobby}"
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalityPanel;
