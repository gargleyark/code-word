const words = [
    'screen',
    'outlet',
    'content',
    'noble',
    'fireplace',
    'urine',
    'experiment',
    'proposal',
    'ethnic',
    'giant',
    'unlikely',
    'limited',
    'tool',
    'height',
    'sale',
    'side',
    'topple',
    'despise',
    'sigh',
    'tactic',
    'consensus',
    'refer',
    'curl',
    'clear',
    'ignite',
    'cancer',
    'multiply',
    'dictionary',
    'researcher',
    'battlefield',
    'manufacturer',
    'responsibility',
    'courtship',
    'disaster',
    'fuss',
    'engineer',
    'gallon',
    'remain',
    'arrow',
    'tear',
    'dorm',
    'hero',
    'model',
    'boy',
    'passion',
    'copy',
    'salon',
    'looting',
    'check',
    'press',
    'orientation',
    'boat',
    'layer',
    'world',
    'deficiency',
    'profound',
    'transfer',
    'help',
    'pardon',
    'sculpture',
    'produce',
    'latest',
    'code',
    'beam',
    'shower',
    'inhabitant',
    'clinic',
    'jewel',
    'belt',
    'thought',
    'application',
    'extort',
    'crackpot',
    'train',
    'bin',
    'recording',
    'business',
    'lighter',
    'shoot',
    'bang',
    'exploration',
    'menu',
    'oven',
    'original',
    'bell',
    'bulb',
    'incident',
    'lane',
    'licence',
    'bishop',
    'photocopy',
    'shine',
    'instal',
    'maximum',
    'inappropriate',
    'portrait',
    'productive',
    'cathedral',
    'text',
    'ambition',
    'horoscope',
    'column',
    'organize',
    'chemistry',
    'cord',
    'lung',
    'relate',
    'stamp',
    'mosaic',
    'ice',
    'expectation',
    'lion',
    'abstract',
    'nose',
    'book',
    'choose',
    'exploit',
    'abolish',
    'point',
    'goalkeeper',
    'acquit',
    'unpleasant',
    'fee',
    'program',
    'variety',
    'hotdog',
    'monstrous',
    'taxi',
    'ballet',
    'margin',
    'banana',
    'break',
    'crevice',
    'legislature',
    'welcome',
    'roof',
    'cause',
    'texture',
    'risk',
    'pioneer',
    'rebellion',
    'functional',
    'wisecrack',
    'satellite',
    'basis',
    'redeem',
    'monopoly',
    'chimney',
    'basin',
    'preach',
    'debt',
    'sleeve',
    'consultation',
    'harsh',
    'waist',
    'ivory',
    'dress',
    'difficult',
    'quiet',
    'isolation',
    'day',
    'monk',
    'accessible',
    'rate',
    'temperature',
    'glory',
    'drown',
    'reduction',
    'expansion',
    'opponent',
    'owe',
    'finger',
    'healthy',
    'problem',
    'pride',
    'ride',
    'galaxy',
    'reproduction',
    'mask',
    'relationship',
    'parachute',
    'fossil',
    'ring',
    'extent',
    'proclaim',
    'incongruous',
    'disappoint',
    'shot',
    'autonomy',
    'red',
    'evolution',
    'dollar',
    'bond',
    'vision',
    'criticism',
    'opposition',
    'color',
    'exchange',
    'chair',
    'activity',
    'pierce',
    'quote',
    'dose',
    'slide',
    'edge',
    'proud',
    'grain',
    'listen',
    'conclusion',
    'reflect',
    'role',
    'sink',
    'dull',
    'hesitate',
    'trend',
    'bow',
    'roll',
    'know',
    'study',
    'fast',
    'depend',
    'calculation',
    'clue',
    'ethics',
    'recruit',
    'worry',
    'classroom',
    'clique',
    'sunshine',
    'play',
    'countryside',
    'pair',
    'brain',
    'confession',
    'intensify',
    'TRUE',
    'pen',
    'survey',
    'bottom',
    'sheep',
    'adoption',
    'shift',
    'invasion',
    'even',
    'explode',
    'maze',
    'eternal',
    'dentist',
    'structure',
    'garbage',
    'pocket',
    'output',
    'agency',
    'stable',
    'flatware',
    'addition',
    'hypothesis',
    'great',
    'balance',
    'assault',
    'collection',
    'image',
    'essential',
    'ignore',
    'sword',
    'ritual',
    'warning',
    'apparatus',
    'casualty',
    'free',
    'heel',
    'improve',
    'husband',
    'craft',
    'distance',
    'goal',
    'convince',
    'title',
    'publicity',
    'star',
    'sentiment',
    'tower',
    'display',
    'form',
    'bulletin',
    'conservation',
    'failure',
    'braid',
    'possession',
    'unfair',
    'remunerate',
    'uncle',
    'abuse',
    'mayor',
    'bark',
    'skilled',
    'urge',
    'receipt',
    'index',
    'belly',
    'trade',
    'intermediate',
    'arrest',
    'sleep',
    'teach',
    'tap',
    'insight',
    'bomb',
    'kid',
    'sector',
    'panic',
    'host',
    'hallway',
    'fabricate',
    'runner',
    'dividend',
    'notebook',
    'powder',
    'diamond',
    'inhibition',
    'illness',
    'jump',
    'nationalist',
    'convulsion',
    'beneficiary',
    'resolution',
    'aisle',
    'scream',
    'ideal',
    'tissue',
    'factor',
    'switch',
    'faint',
    'socialist',
    'hobby',
    'pull',
    'shock',
    'deprive',
    'visit',
    'agony',
    'baseball',
    'symptom',
    'establish',
    'swarm',
    'oppose',
    'sunrise',
    'depressed',
    'verdict',
    'cutting',
    'treasurer',
    'due',
    'inspector',
    'wound',
    'read',
    'incredible',
    'paragraph',
    'spell',
    'transport',
    'coverage',
    'technique',
    'leash',
    'decide',
    'suburb',
    'summer',
    'tender',
    'card',
    'discreet',
    'oil',
    'seize',
    'slot',
    'mention',
    'terminal',
    'missile',
    'common',
    'manner',
    'dressing',
    'shark',
    'rank',
    'AIDS',
    'silk',
    'interactive',
    'identification',
    'complain',
    'market',
    'disgrace',
    'freeze',
    'hole',
    'fever',
    'fox',
    'plaintiff',
    'microphone',
    'act',
    'breed',
    'pleasure',
    'cup',
    'complex',
    'automatic',
    'behavior',
    'chase',
    'soar',
    'define',
    'laborer',
    'earthflax',
    'include',
    'brake',
    'contradiction',
    'draw',
    'quantity',
    'unique',
    'angel',
    'voter',
    'thoughtful',
    'twin',
    'to',
    'objective',
    'simplicity',
    'anticipation',
    'differ',
    'physical',
    'magnetic',
    'advertising',
    'race',
    'facade',
    'hard',
    'time',
    'lean',
    'elegant',
    'lack',
    'recycle',
    'spring',
    'clarify',
    'tooth',
    'pension',
    'desk',
    'hover',
    'moon',
    'kneel',
    'compartment',
    'tick',
    'wreck',
    'snake',
    'addicted',
    'curve',
    'country',
    'arrange',
    'helmet',
    'expenditure',
    'old',
    'humanity',
    'correspond',
    'tension',
    'chin',
    'registration',
    'fairy',
    'tolerant',
    'canvas',
    'art',
    'withdraw',
    'orthodox',
    'sketch',
    'lesson',
    'inspiration',
    'school',
    'ribbon',
    'smash',
    'compliance',
    'background',
    'temple',
    'remark',
    'senior',
    'climate',
    'improvement',
    'lamb',
    'penny',
    'sight',
    'discriminate',
    'equinox',
    'learn',
    'combination',
    'breeze',
    'sheet',
    'stream',
    'trait',
    'catalogue',
    'exceed',
    'democratic',
    'pest',
    'plant',
    'positive',
    'confusion',
    'innovation',
    'conceive',
    'party',
    'stage',
    'mutual',
    'peasant',
    'grimace',
    'tablet',
    'pit',
    'cell',
    'gravity',
    'discount',
    'protection',
    'reveal',
    'cruel',
    'raise',
    'exemption',
    'environment',
    'debate',
    'freckle',
    'laundry',
    'trip',
    'trainer',
    'modernize',
    'harbor',
    'meadow',
    'opposite',
    'premium',
    'government',
    'state',
    'heal',
    'equation',
    'coalition',
    'silence',
    'panel',
    'testify',
    'appeal',
    'benefit',
    'mile',
    'access',
    'waste',
    'effect',
    'cat',
    'leaf',
    'adjust',
    'reporter',
    'circulate',
    'argument',
    'knock',
    'bleed',
    'exclusive',
    'perforate',
    'beautiful',
    'load',
    'impact',
    'dribble',
    'reptile',
    'god',
    'cabin',
    'express',
    'trivial',
    'dark',
    'cycle',
    'strike',
    'funny',
    'poetry',
    'habit',
    'wage',
    'rabbit',
    'get',
    'drawing',
    'door',
    'delicate',
    'mist',
    'crusade',
    'convenience',
    'ruin',
    'recommendation',
    'bush',
    'admit',
    'recognize',
    'orange',
    'left',
    'slap',
    'score',
    'complication',
    'competence',
    'photography',
    'friend',
    'contact',
    'national',
    'no',
    'sniff',
    'loop',
    'cheek',
    'apology',
    'steward',
    'projection',
    'strong',
    'uniform',
    'spokesperson',
    'wheel',
    'grant',
    'requirement',
    'bring',
    'clean',
    'tempt',
    'leave',
    'letter',
    'commerce',
    'so',
    'rhetoric',
    'spy',
    'degree',
    'formulate',
    'sacrifice',
    'frank',
    'spread',
    'bury',
    'essay',
    'mutation',
    'place',
    'precede',
    'soak',
    'cotton',
    'restrain',
    'excavation',
    'suite',
    'feeling',
    'conference',
    'source',
    'mind',
    'omission',
    'rally',
    'constitutional',
    'cupboard',
    'campaign',
    'skip',
    'unanimous',
    'director',
    'liberty',
    'city',
    'trance',
    'decoration',
    'coat',
    'fibre',
    'snap',
    'name',
    'concentration',
    'Mars',
    'porter',
    'like',
    'extreme',
    'cancel',
    'opinion',
    'deposit',
    'integrated',
    'tumour',
    'wood',
    'cave',
    'navy',
    'fraud',
    'law',
    'grave',
    'redundancy',
    'junior',
    'conductor',
    'prey',
    'log',
    'bad',
    'equip',
    'inflation',
    'mastermind',
    'prayer',
    'tragedy',
    'arena',
    'indication',
    'X-ray',
    'forest',
    'density',
    'gaffe',
    'gem',
    'by',
    'harvest',
    'touch',
    'radio',
    'adult',
    'relieve',
    'stun',
    'pig',
    'miss',
    'barrel',
    'head',
    'tax',
    'part',
    'float',
    'snack',
    'social',
    'concept',
    'core',
    'mean',
    'highlight',
    'student',
    'total',
    'understand',
    'mood',
    'traction',
    'terrify',
    'front',
    'complete',
    'rock',
    'talk',
    'pavement',
    'loose',
    'fisherman',
    'recover',
    'audience',
    'expect',
    'cheque',
    'migration',
    'bat',
    'aspect',
    'brave',
    'observation',
    'encourage',
    'commitment',
    'frighten',
    'ghostwriter',
    'analysis',
    'heart',
    'key',
    'water',
    'operation',
    'banner',
    'lost',
    'acceptable',
    'mail',
    'struggle',
    'guitar',
    'premature',
    'ambiguity',
    'disorder',
    'relative',
    'biography',
    'novel',
    'rear',
    'writer',
    'nomination',
    'jealous',
    'need',
    'shadow',
    'donor',
    'blind',
    'gallery',
    'authority',
    'slow',
    'gear',
    'costume',
    'discrimination',
    'delivery',
    'theory',
    'observer',
    'curtain',
    'referee',
    'football',
    'tiptoe',
    'wrist',
    'cane',
    'suit',
    'island',
    'magazine',
    'introduction',
    'prejudice',
    'wave',
    'embox',
    'initial',
    'live',
    'leader',
    'assume',
    'tire',
    'memory',
    'castle',
    'center',
    'medicine',
    'progressive',
    'at',
    'offer',
    'bake',
    'depart',
    'network',
    'mourning',
    'run',
    'imagine',
    'promise',
    'pain',
    'packet',
    'congress',
    'computing',
    'wrong',
    'heir',
    'permission',
    'straight',
    'consumption',
    'toast',
    'mess',
    'full',
    'reactor',
    'skin',
    'hell',
    'honest',
    'computer',
    'edition',
    'indulge',
    'glow',
    'noise',
    'deer',
    'earwax',
    'laboratory',
    'ticket',
    'construct',
    'tasty',
    'sail',
    'flu',
    'directory',
    'cheap',
    'liver',
    'use',
    'systematic',
    'frown',
    'conflict',
    'hostage',
    'society',
    'army',
    'oral',
    'flood',
    'conservative',
    'housing',
    'carbon',
    'waiter',
    'respectable',
    'crystal',
    'helpless',
    'style',
    'grand',
    'yearn',
    'bet',
    'helicopter',
    'do',
    'management',
    'brother',
    'dealer',
    'figure',
    'final',
    'supplementary',
    'restaurant',
    'swipe',
    'knit',
    'loot',
    'inn',
    'tidy',
    'borrow',
    'prisoner',
    'week',
    'ministry',
    'graduate',
    'mosquito',
    'ample',
    'literacy',
    'blue',
    'snarl',
    'architecture',
    'dump',
    'yard',
    'banquet',
    'disappear',
    'dough',
    'welfare',
    'basic',
    'deteriorate',
    'matter',
    'player',
    'century',
    'cemetery',
    'ego',
    'bay',
    'rent',
    'trustee',
    'ancestor',
    'concern',
    'church',
    'blade',
    'teenager',
    'grass',
    'bolt',
    'crack',
    'fat',
    'horror',
    'moment',
    'tube',
    'flower',
    'production',
    'flock',
    'master',
    'adopt',
    'mill',
    'glimpse',
    'mole',
    'gasp',
    'accumulation',
    'overall',
    'plain',
    'chew',
    'brown',
    'employ',
    'civilian',
    'straw',
    'flow',
    'few',
    'shorts',
    'blast',
    'domestic',
    'interest',
    'important',
    'duty',
    'ally',
    'wind',
    'kidnap',
    'plead',
    'union',
    'circle',
    'collapse',
    'liberal',
    'plan',
    'musical',
    'on',
    'nuance',
    'attractive',
    'chance',
    'lick',
    'particular',
    'chapter',
    'economics',
    'seasonal',
    'minute',
    'shell',
    'marsh',
    'pastel',
    'try',
    'contain',
    'dinner',
    'straighten',
    'sell',
    'glue',
    'debut',
    'session',
    'diameter',
    'stimulation',
    'exotic',
    'adviser',
    'throne',
    'evening',
    'ridge',
    'album',
    'lip',
    'drain',
    'body',
    'translate',
    'closed',
    'hike',
    'doll',
    'scandal',
    'inject',
    'jam',
    'bear',
    'volume',
    'experience',
    'exact',
    'lid',
    'ignorance',
    'remedy',
    'dish',
    'memorandum',
    'enlarge',
    'discipline',
    'vertical',
    'performance',
    'excavate',
    'pace',
    'constituency',
    'pour',
    'Bible',
    'stereotype',
    'pluck',
    'economic',
    'environmental',
    'obstacle',
    'lawyer',
    'repeat',
    'motivation',
    'aid',
    'inch',
    'knot',
    'reputation',
    'calendar',
    'expression',
    'partnership',
    'betray',
    'linen',
    'overcharge',
    'mark'
]

export const getWord = (customWords) => {
    if (customWords) {
        const customWordsArray = customWords.split(' ')
        return customWordsArray[parseInt(Math.random() * customWordsArray.length)]
    }

    return words[parseInt(Math.random() * words.length)]
}