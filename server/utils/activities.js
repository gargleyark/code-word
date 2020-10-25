const getTurnMessage = type => type === 'clue' ? 'provide a clue' : 'make a guess'

export const createStartTurn = (team, type) => `It is ${team} team's turn to ${getTurnMessage(type)}.`