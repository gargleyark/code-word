import { createTeamMember } from './teamMembers';
import { createTeams } from './teams';
import { getWord } from './words';
import { createStartTurn } from './activities'

const getWordBlock = (pastWords, customWords) => {
    let word = getWord(customWords)

    while(pastWords.indexOf(word) !== -1) {
        word = getWord();
    }

    const block = {
        word,
    }

    return block
}

const getWordMap = (teams, options) => {
    const wordmap = []
    const totalWords = options && options.count ? options.count : 25
    let team1Count = parseInt((totalWords) / 3) + 1
    let team2Count = parseInt((totalWords) / 3)
    let deathCount = 1

    for (let i = 0; i < totalWords; i++) {
        const block = getWordBlock(wordmap, options && options.words || null)
        wordmap.push(block)
    }

    let index = 0

    console.log(totalWords, team1Count, team2Count)

    while(team1Count || team2Count || deathCount) {
        // console.log(team1Count, team2Count, deathCount)
        if (index > (totalWords - 1)) {
            index = 0;
        }

        // console.log(index)
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

export const createWaitingRoom = (initiator, id, options) => {
    const teams = createTeams();

    const game = {
        teams,
        teamMembers: [createTeamMember(initiator, teams[0].color, true)],
    };

    return {
        ...game,
        stage: 'waitingroom',
        id,
        options
    };
}

export const resetToMeetingRoom = adventure => ({
    teams: adventure.teams.map(team => ({
        ...team,
        score: 0
    })),
    teamMembers: adventure.teamMembers,
    winner: adventure.winner,
    id: adventure.id,
    stage: 'waitingroom'
});

export const createWordMap = (game) => {
    const wordMap = getWordMap(game.teams, game.options);

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