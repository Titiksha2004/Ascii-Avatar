import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '../components/ui/scroll-area';
import { hairstyles, eyes, noses, mouths, accessories, outfits, moods } from '../data/asciiParts';

const OptionButton = ({ selected, onClick, children, testId }) => (
  <motion.button
    className={`
      w-full px-3 py-2.5 text-xs uppercase tracking-wider border transition-all duration-300 text-center
      ${selected 
        ? 'border-white bg-white text-black font-medium' 
        : 'border-white/20 bg-transparent text-white/70 hover:border-white/50 hover:bg-white/5'
      }
    `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    data-testid={testId}
  >
    {children}
  </motion.button>
);

const OptionGrid = ({ options, selected, onSelect, category }) => (
  <div className="grid grid-cols-2 gap-2">
    {Object.entries(options).map(([key, value]) => (
      <OptionButton
        key={key}
        selected={selected === key}
        onClick={() => onSelect(key)}
        testId={`option-${category}-${key}`}
      >
        {value.name}
      </OptionButton>
    ))}
  </div>
);

const TabButton = ({ active, onClick, children, testId }) => (
  <button
    className={`
      text-[10px] uppercase tracking-wider px-2 py-1.5 border transition-all
      ${active 
        ? 'bg-white text-black border-white' 
        : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'
      }
    `}
    onClick={onClick}
    data-testid={testId}
  >
    {children}
  </button>
);

const CustomizationPanel = ({ character, setCharacter, playSound }) => {
  const [activeTab, setActiveTab] = React.useState('hair');
  
  const handleChange = (category, value) => {
    if (playSound) playSound('boop');
    setCharacter(prev => ({ ...prev, [category]: value }));
  };

  const handleTabChange = (tab) => {
    if (playSound) playSound('click');
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'hair', label: 'Hair' },
    { id: 'eyes', label: 'Eyes' },
    { id: 'nose', label: 'Nose' },
    { id: 'mouth', label: 'Mouth' },
  ];

  const tabs2 = [
    { id: 'accessory', label: 'Acc' },
    { id: 'outfit', label: 'Outfit' },
    { id: 'mood', label: 'Mood' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'hair':
        return (
          <OptionGrid
            options={hairstyles}
            selected={character.hairstyle}
            onSelect={(value) => handleChange('hairstyle', value)}
            category="hair"
          />
        );
      case 'eyes':
        return (
          <OptionGrid
            options={eyes}
            selected={character.eyeStyle}
            onSelect={(value) => handleChange('eyeStyle', value)}
            category="eyes"
          />
        );
      case 'nose':
        return (
          <OptionGrid
            options={noses}
            selected={character.nose}
            onSelect={(value) => handleChange('nose', value)}
            category="nose"
          />
        );
      case 'mouth':
        return (
          <OptionGrid
            options={mouths}
            selected={character.mouth}
            onSelect={(value) => handleChange('mouth', value)}
            category="mouth"
          />
        );
      case 'accessory':
        return (
          <OptionGrid
            options={accessories}
            selected={character.accessory}
            onSelect={(value) => handleChange('accessory', value)}
            category="accessory"
          />
        );
      case 'outfit':
        return (
          <OptionGrid
            options={outfits}
            selected={character.outfit}
            onSelect={(value) => handleChange('outfit', value)}
            category="outfit"
          />
        );
      case 'mood':
        return (
          <OptionGrid
            options={moods}
            selected={character.mood}
            onSelect={(value) => handleChange('mood', value)}
            category="mood"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="terminal-card h-full flex flex-col"
      data-testid="customization-panel"
    >
      <div className="mb-4">
        <h2 className="font-secondary text-2xl glow-text tracking-wider">
          CUSTOMIZE
        </h2>
        <p className="text-xs text-white/50 tracking-widest uppercase mt-1">
          Build your ASCII soul
        </p>
      </div>

      {/* Tab rows */}
      <div className="grid grid-cols-4 gap-1 mb-2">
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            testId={`tab-${tab.id}`}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      
      <div className="grid grid-cols-4 gap-1 mb-4">
        {tabs2.map(tab => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            testId={`tab-${tab.id}`}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      {/* Content area */}
      <ScrollArea className="flex-1 pr-2">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </ScrollArea>
    </div>
  );
};

export default CustomizationPanel;
