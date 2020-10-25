import { createTeamMember } from './teamMembers';
import { createTeams } from './teams';
import { getWord } from './words';
import { createStartTurn } from './activities'

const getWordBlock = () => {
    const block = {
        word: getWord(),
    }

    return block
}

const getWordMap = (teams) => {
    const wordmap = []
    let team1Count = 9
    let team2Count = 8
    let deathCount = 1
    for (let i = 0; i < 25; i++) {
        const block = getWordBlock()
        wordmap.push(block)
    }

    let index = 0
    while(team1Count || team2Count || deathCount) {
        // console.log(team1Count, team2Count, deathCount)
        if (index > 24) {
            index = 0;
        }

        console.log(index)
        if (!wordmap[index].team) {
            console.log('no team')
            if (Math.random() > 0.9 && deathCount) {
                console.log('subtracting')
                wordmap[index].team = 'black'
                deathCount--
            }

            if (Math.random() > 0.6 && team1Count && !wordmap[index].team) {
                wordmap[index].team = teams[0].color
                team1Count--
            }

            if (Math.random() > 0.6 && team2Count && !wordmap[index].team) {
                wordmap[index].team = teams[1].color
                team2Count--
            }
        }

        index++
    }

    return wordmap
}

export const createWaitingRoom = (initiator, id) => {
    const teams = createTeams();

    const game = {
        teams,
        teamMembers: [createTeamMember(initiator, teams[0].color, true)],
    };

    return {
        ...game,
        stage: 'waitingroom',
        id
    };
}

export const resetToMeetingRoom = adventure => ({
    teams: adventure.teams,
    teamMembers: adventure.teamMembers,
    winner: adventure.winner,
    id: adventure.id,
    stage: 'waitingroom'
});

export const createWordMap = (game) => {
    const wordMap = getWordMap(game.teams);

    return {
        wordMap,
        turn: {
            team: game.teams[0].color,
            type: 'clue'
        },
        ...game,
        stage: 'game',
        activity: [createStartTurn(game.teams[0].color, 'clue')],
        winner: undefined
    };
};