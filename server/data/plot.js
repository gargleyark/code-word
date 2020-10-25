export const themes = [
    {
        name: 'Robbery',
        requiredParameters: [
            'item', 
            'time',
            'timeLocation',
            'location',
            'itemReason',
            'friend'
        ],
        parameters: {},
        template: `Adventurers! At {time} yesterday {timeLocation} a mysterious robber broke into {location}! The {item} was {itemReason} here, and with a carefully executed plan the {item} was stolen!
We need your help to recover this object and find out who took it! We've organised for you to meet with our contact there, {friend}, who will share with you the clues that they have gathered. Head over to {location} now and they will get in touch with you when you are there!`
    }
];

export const items = ['Golden Flute of Ramesses III', 'Gold Cross of St Luke', 'Ancient Sceptre of Alfred the Great', 'skull of Richard III', 'gold hoard of King John'];

export const itemReasons = ['being stored', 'on display', 'being researched', 'hidden by the government'];

export const times = [1,2,3,4,5,6,7,8,9,10,11,12];