export const createTeamMember = (name, teamId, firstMember) => ({
    name,
    team: teamId,
    clueGiver: firstMember
});

export const getTeamMemberByName = (teamName, teamMembers) => teamMembers.find(({ name }) => name === teamName)

export const updateTeamMembers = (members, newUser) => {
    const teamCounts = { blue: 0, red: 0 };

    console.log(members)

    members.forEach(({ team }) => teamCounts[team] ? teamCounts[team]++ : teamCounts[team] = 1);

    console.log(teamCounts)

    const [ smallestTeam, count ] = Object.entries(teamCounts).sort(([name, count], [name2, count2]) => count > count2 ? 1 : -1 )[0];

    console.log('assigning user to team', smallestTeam)

    return [...members, createTeamMember(newUser, smallestTeam, count === 0)];
}