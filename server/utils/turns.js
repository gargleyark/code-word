export const getNextTurn = (turn, teams) => {
    const teamIndex = teams.findIndex(({ color }) => color === turn.team);

    if (turn.type === 'clue') {
        return {
            ...turn,
            type: 'guess'
        }
    }

    console.log(teamIndex, turn, teams)

    return {
        team: teams[teamIndex + 1] && teams[teamIndex + 1].color || teams[0].color,
        type: 'clue'
    }
};