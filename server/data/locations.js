const mockEvents = [
    {
        type: 'crimeScene',
        image: '',
    },
    {
        type: 'friendLocation',
        letters: '',
    },
    {
        type: 'whereTheyStayed',
        note: '',
    },
    {
        type: 'afterCrime',
        imageParts: '',
    },
    {
        type: 'whereItsHidden',
    },
];

export const locations = [
    {
        latitude: 51.515311,
        longitude: -0.092418,
        name: 'St Lawrence Jewry',
        type: 'Religious',
        events: mockEvents,
    },
    {
        latitude: 51.516311,
        longitude: -0.093024,
        name: 'Saint Mary Aldermanbury Garden',
        type: 'Park',
        events: mockEvents,
    },
    {
        latitude: 51.515874, 
        longitude: -0.091914,
        name: 'Guild Hall',
        type: 'Museum',
        events: mockEvents,
    },
    {
        name: 'London\'s Roman Amphitheatre',
        latitude: 51.515528,
        longitude: -0.091453,
        type: 'Museum',
        events: mockEvents,
    },
    {
        name: 'Saint Pauls',
        latitude: 51.513574,
        longitude: -0.097922,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'Paternoster Square',
        latitude: 51.514565,
        longitude: -0.099170,
        type: 'Park',
        events: mockEvents,
    },
    {
        name: 'St Anne & St Agnes Church',
        latitude: 51.516456,
        longitude: -0.096289,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'The Worshipful Company of Pewterers',
        latitude: 51.516713,
        longitude: -0.095086,
        type: 'Business',
        events: mockEvents,
    },
    {
        name: 'Bank of England',
        latitude: 51.514000,
        longitude: -0.088413,
        type: 'Business',
        events: mockEvents,
    },
    {
        name: 'Monument to the Great Fire of London',
        latitude: 51.510114,
        longitude: -0.085919,
        type: 'Museum',
        events: mockEvents,
    },
    {
        name: 'St. Dunstan in the East Church Garden',
        latitude: 51.509679,
        longitude: -0.082400,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'Brewers\' Hall',
        latitude: 51.517184,
        longitude: -0.092555,
        type: 'Business',
        events: mockEvents,
    },
    {
        name: 'St Alphage',
        latitude: 51.517700,
        longitude: -0.092185,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'St Giles Cripplegate',
        latitude: 51.518660,
        longitude: -0.093714,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'The Guild Church of St Mary Aldermary',
        latitude: 51.512774,
        longitude: -0.093306,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'College of Arms',
        latitude: 51.512236,
        longitude: -0.098735,
        type: 'Business',
        events: mockEvents,
    },
    {
        name: 'St Mary Le Bow Church',
        latitude: 51.513685,
        longitude: -0.093560,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'Salisbury Square',
        latitude: 51.513515,
        longitude: -0.106307,
        type: 'Park',
        events: mockEvents,
    },
    {
        name: 'St Bride\'s Church',
        latitude: 51.513724,
        longitude: -0.105452,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'Christchurch Tower',
        latitude: 51.515851,
        longitude: -0.099251,
        type: 'Park',
        events: mockEvents,
    },
    {
        name: 'St Sepulchre\'s Church',
        latitude: 51.516665,
        longitude: -0.102040,
        type: 'Religious',
        events: mockEvents,
    },
    {
        name: 'Fleet Place',
        latitude: 51.515497,
        longitude: -0.103483,
        type: 'Park',
        events: mockEvents,
    },
    {
        name: 'Whittington Gardens',
        latitude: 51.510923,
        longitude: -0.092090,
        type: 'Park',
        events: mockEvents,
    }
].map((item, index) => ({
    ...item,
    events: item.events.map((event, eventIndex) => ({
        ...event,
        id: `${index}-${eventIndex}`
    })),
    id: index
}));