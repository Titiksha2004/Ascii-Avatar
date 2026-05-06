# ASCII Human Generator - PRD

## Original Problem Statement
Build an immersive, aesthetic web experience for an ASCII Human Generator — a playful avatar creation website where users can generate and customize adorable human characters entirely using ASCII-style art and minimalist text visuals. The entire website should feel like a dreamy cyber-cute interactive toy mixed with retro terminal aesthetics and modern motion design.

## User Choices
- Sound effects: Cute ambient sounds on buttons, swoosh on hover, character sounds
- Export: Download as PNG image or TXT text file
- Authentication: No auth needed
- Particles: CSS-based floating doodles (Three.js had compatibility issues)

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI (minimal, for future API extensions)
- **Database**: MongoDB (available but not currently used)

## Core Features Implemented
- [x] Hero section with animated ASCII character and CTA buttons
- [x] Character customization with 7 tabs:
  - Hair (8 styles: wavy, straight, short, curly, ponytail, buns, mohawk, bob)
  - Eyes (8 styles: normal, cute, sleepy, sparkle, wink, round, glasses, sunglasses)
  - Nose (6 styles: small, dot, line, triangle, button, none)
  - Mouth (8 styles: smile, grin, open, cat, line, pout, surprised, tongue)
  - Accessories (8 options: none, hat, beanie, bow, headphones, earrings, necklace, scarf)
  - Outfit (8 styles: tshirt, vneck, hoodie, collar, sweater, dress, suit, tank)
  - Mood (8 options: happy, sleepy, excited, chill, dreamy, mischievous, shy, cool)
- [x] Live ASCII character preview with blinking animation
- [x] "Surprise Me" random character generation with glitch effect
- [x] Personality panel with mood, stats, traits, aesthetic, hobby
- [x] Download as PNG (html2canvas)
- [x] Download as TXT (Blob API)
- [x] Copy to clipboard with fallback
- [x] Sound toggle
- [x] Floating doodles background animation
- [x] CRT scanlines and noise overlay effects
- [x] Cursor trail effect
- [x] Dark terminal aesthetic with monochrome theme

## User Personas
1. **Creative Hobbyist**: Wants to create unique ASCII avatars for profiles
2. **Nostalgic Web Enthusiast**: Appreciates retro terminal aesthetics
3. **Digital Artist**: Explores ASCII art for creative expression

## What's Been Implemented (May 6, 2026)
- Full frontend character generation system
- Detailed ASCII art characters with flowing hair, face, neck, outfit
- Real-time customization with smooth animations
- Random personality trait generation
- Export functionality (PNG/TXT/Clipboard)
- Sound effects using Web Audio API

## Backlog
### P1 (High Priority)
- Add more detailed ASCII art patterns
- Character animation poses (waving, dancing)
- Gallery to save created characters (requires auth)

### P2 (Medium Priority)
- Share character via unique URL
- More accessories (hats, masks, jewelry)
- Background customization

### P3 (Low Priority)
- Character collections/presets
- Animation export as GIF
- Mobile-optimized touch controls

## Next Tasks
1. Consider adding user accounts for saving characters
2. Add more intricate ASCII art patterns
3. Implement character sharing via URL
