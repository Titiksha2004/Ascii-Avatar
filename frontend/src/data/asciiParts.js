// ASCII Human Parts Data - Detailed Style like reference image

export const hairstyles = {
  wavy: {
    name: 'Wavy',
    top: `              _~_~_              
         _.-'     '-._         
       ,'   .......   ',       
      /   .'       '.   \\      `,
    sides: '',
    bottom: ``
  },
  straight: {
    name: 'Straight',
    top: `           _________           
        .-'         '-.        
       /   .........   \\       
      |   '         '   |      `,
    sides: '',
    bottom: ``
  },
  short: {
    name: 'Short',
    top: `            .~~~.            
          .'     '.          
         /  .....  \\         
        |  '     '  |        `,
    sides: '',
    bottom: ``
  },
  curly: {
    name: 'Curly',
    top: `        ((@))  ((@))        
       ((   ))((   ))       
      ((  .'''''.  ))      
       ))/       \\((       `,
    sides: '',
    bottom: ``
  },
  ponytail: {
    name: 'Ponytail',
    top: `           _______  ))        
        .-'       '-.((       
       /   .......   \\))      
      |   '       '   | ((    `,
    sides: '',
    bottom: ``
  },
  buns: {
    name: 'Buns',
    top: `      (o)           (o)      
        \\___________/        
       /   .......   \\       
      |   '       '   |      `,
    sides: '',
    bottom: ``
  },
  mohawk: {
    name: 'Mohawk',
    top: `           |||||           
           |||||           
          .'   '.          
         /  ...  \\         `,
    sides: '',
    bottom: ``
  },
  bob: {
    name: 'Bob',
    top: `          _______          
        ,'       ',        
       /  .......  \\       
      |  |       |  |      `,
    sides: '',
    bottom: ``
  }
};

export const eyes = {
  normal: { 
    name: 'Normal', 
    open: `      .           .      `,
    blink: `      -           -      `
  },
  cute: { 
    name: 'Cute', 
    open: `      ^           ^      `,
    blink: `      -           -      `
  },
  sleepy: { 
    name: 'Sleepy', 
    open: `     -.-         -.-     `,
    blink: `      _           _      `
  },
  sparkle: { 
    name: 'Sparkle', 
    open: `      *           *      `,
    blink: `      >           <      `
  },
  wink: { 
    name: 'Wink', 
    open: `      ^           .      `,
    blink: `      -           -      `
  },
  round: { 
    name: 'Round', 
    open: `      o           o      `,
    blink: `      -           -      `
  },
  glasses: { 
    name: 'Glasses', 
    open: `    [-.-]       [-.-]    `,
    blink: `    [---]       [---]    `
  },
  sunglasses: { 
    name: 'Shades', 
    open: `    [###]       [###]    `,
    blink: `    [###]       [###]    `
  }
};

export const noses = {
  small: { name: 'Small', art: `            u            ` },
  dot: { name: 'Dot', art: `            .            ` },
  line: { name: 'Line', art: `            |            ` },
  triangle: { name: 'Triangle', art: `            ^            ` },
  button: { name: 'Button', art: `           (')           ` },
  none: { name: 'None', art: `                         ` }
};

export const mouths = {
  smile: { name: 'Smile', art: `          \\_/          ` },
  grin: { name: 'Grin', art: `         \\___/         ` },
  open: { name: 'Open', art: `          (o)          ` },
  cat: { name: 'Cat', art: `          =w=          ` },
  line: { name: 'Line', art: `          ---          ` },
  pout: { name: 'Pout', art: `           3           ` },
  surprised: { name: 'Surprised', art: `          (O)          ` },
  tongue: { name: 'Tongue', art: `          :P           ` }
};

export const outfits = {
  tshirt: {
    name: 'T-Shirt',
    art: `       \\         /       
    .___|         |___.    
   /                   \\   
  |                     |  `
  },
  vneck: {
    name: 'V-Neck',
    art: `       \\         /       
        |   V   |        
       /   / \\   \\       
      |   /   \\   |      `
  },
  hoodie: {
    name: 'Hoodie',
    art: `      _(         )_      
    .'  |       |  '.    
   /   _|       |_   \\   
  |   |           |   |  `
  },
  collar: {
    name: 'Collar',
    art: `       \\         /       
      _>\\       /<_      
     /   \\_   _/   \\     
    |               |    `
  },
  sweater: {
    name: 'Sweater',
    art: `       \\         /       
    .___|~~~~~~~|___.    
   /~~~~~~~~~~~~~~~~~\\   
  |~~~~~~~~~~~~~~~~~~~|  `
  },
  dress: {
    name: 'Dress',
    art: `       \\         /       
        |       |        
       /         \\       
      /           \\      `
  },
  suit: {
    name: 'Suit',
    art: `       \\         /       
      _/|  | |  |\\_      
     / ||  | |  || \\     
    |  ||       ||  |    `
  },
  tank: {
    name: 'Tank',
    art: `       \\         /       
        |       |        
        |       |        
         |     |         `
  }
};

export const accessories = {
  none: { name: 'None', type: 'none', art: '' },
  hat: { 
    name: 'Hat', 
    type: 'head',
    art: `       ___________       
      /___________\\      `
  },
  beanie: { 
    name: 'Beanie', 
    type: 'head',
    art: `         _____         
        /~~~~~\\        `
  },
  bow: { 
    name: 'Bow', 
    type: 'head',
    art: `      >===<@>===>      `
  },
  headphones: { 
    name: 'Headphones', 
    type: 'head',
    art: `    (=)         (=)    `
  },
  earrings: { 
    name: 'Earrings', 
    type: 'face',
    art: `   o                 o   `
  },
  necklace: { 
    name: 'Necklace', 
    type: 'neck',
    art: `<*>`
  },
  scarf: {
    name: 'Scarf',
    type: 'neck', 
    art: `~~~~~~~~`
  }
};

export const moods = {
  happy: { name: 'Happy', emoji: '(◕‿◕)' },
  sleepy: { name: 'Sleepy', emoji: '(-.-)zzZ' },
  excited: { name: 'Excited', emoji: '\\(^o^)/' },
  chill: { name: 'Chill', emoji: '(￣▽￣)' },
  dreamy: { name: 'Dreamy', emoji: '(◡‿◡✿)' },
  mischievous: { name: 'Mischievous', emoji: '(¬‿¬)' },
  shy: { name: 'Shy', emoji: '(〃▽〃)' },
  cool: { name: 'Cool', emoji: '( •_•)>⌐■-■' }
};

export const skinTones = {
  light: { name: 'Light', shade: '░' },
  medium: { name: 'Medium', shade: '▒' },
  dark: { name: 'Dark', shade: '▓' },
  outline: { name: 'Outline', shade: ' ' }
};

export const poses = {
  standing: { name: 'Standing', modifier: 'neutral' },
  waving: { name: 'Waving', modifier: 'wave' },
  sitting: { name: 'Sitting', modifier: 'sit' }
};

// Personality traits for random generation
export const personalityTraits = [
  'night owl', 'early bird', 'coffee addict', 'tea enthusiast',
  'collects CDs', 'vinyl lover', 'pixel artist', 'dreamcore programmer',
  'retro gamer', 'cloud watcher', 'stargazer', 'moon worshipper',
  'soft goth', 'cyber librarian', 'arcade kid', 'café dweller',
  'rainy day reader', 'sunset chaser', 'plant parent', 'cozy homebody',
  'lo-fi listener', 'ambient explorer', 'keyboard collector', 'terminal wizard',
  'strawberry milk enthusiast', 'boba connoisseur', 'midnight coder',
  'daydreamer', 'notebook hoarder', 'sticker collector', 'indie web citizen',
  'glitch artist', 'synth wave surfer', 'neon soul', 'digital wanderer'
];

export const hobbies = [
  'collecting rare fonts', 'making playlists', 'writing haikus',
  'drawing in margins', 'building keyboards', 'coding at 3am',
  'watching anime', 'reading manga', 'playing rhythm games',
  'taking film photos', 'making pixel art', 'journaling',
  'organizing everything', 'napping expertly', 'doomscrolling mindfully',
  'making spreadsheets', 'curating aesthetics', 'overthinking',
  'naming houseplants', 'befriending cats', 'late night walks'
];

export const aesthetics = [
  'dreamcore', 'webcore', 'terminal aesthetic', 'soft goth',
  'cottagecore hacker', 'cyber cute', 'retro futurist', 'lo-fi soul',
  'vaporwave minimal', 'dark academia lite', 'indie web nostalgia',
  'pixel perfect', 'mono aesthetic', 'glitch romantic', 'cozy tech'
];
