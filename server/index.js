const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

import { updateTeamMembers, getTeamMemberByName } from './utils/teamMembers';
import { getNextTurn } from './utils/turns';
import { createWordMap, createWaitingRoom, resetToMeetingRoom } from './utils/wordmaps';
import { createStartTurn } from './utils/activities'


const port = process.env.PORT || 3000;

const wordmaps = {};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', function(socket){

  socket.on('change-adventure', ({ name, id }) => {
    socket.username = name;

    console.log('got', id, Object.keys(wordmaps))
    if (!id) {
      const newId = `${parseInt(Math.random() * 5000)}`
      console.log('creating adventure')
      wordmaps[newId] = createWaitingRoom(name, newId);
      socket.gameId = newId;
      socket.emit('change-adventure', wordmaps[newId]);
      socket.join(newId);
    } else if (id && wordmaps[id]) {
      console.log('can join game')

      let userExists;

      wordmaps[id].teamMembers.forEach((member) => {
        if (member.name === name) {
          console.log('updating socket for', name)
          userExists = true;
        }
      });

      if (!userExists) {
        console.log('adding new user ', name)
        wordmaps[id].teamMembers = updateTeamMembers(wordmaps[id].teamMembers, name)
      }
      socket.gameId = id;
      socket.join(id)
      io.to(id).emit('change-adventure', wordmaps[id])
    } else {
      socket.emit('failure', { message: 'Unable to find game'})
    }
  });

  socket.on('start-game', ({ id }) => {
    console.log('staring game', id)
    if (wordmaps[id]) {
      const game = createWordMap(wordmaps[id]);
      wordmaps[id] = game;
      io.to(id).emit('start-game', wordmaps[id])
    }
  });

  socket.on('send-clue', ({ word, count, id }) => {
    console.log('clue sent for', id)
    if (wordmaps[id]) {
      const turn = getNextTurn(wordmaps[id].turn, wordmaps[id].teams)
      wordmaps[id].activity.push(`The ${turn.team} team have been given the clue "${word}" for ${count} word${count > 1 ? 's' : ''}.`)
      wordmaps[id].activity.push(createStartTurn(turn.team, turn.type))
      wordmaps[id].turn = {
        ...turn,
        clue: { word, count }
      };
      io.to(id).emit('change-adventure', wordmaps[id])
    }
  });

  socket.on('send-guess', ({ id, guesser, word }) => {
    console.log('guess sent for', id)
    if (wordmaps[id]) {
      const index = wordmaps[id].wordMap.findIndex(wordmap => wordmap.word === word)
      wordmaps[id].turn.clue.count--;
      wordmaps[id].activity.push(`${guesser} guessed ${wordmaps[id].wordMap[index].word}!`)
      wordmaps[id].wordMap[index].revealed = true;
      wordmaps[id].teams = wordmaps[id].teams.map(team => {
        if (team.color === wordmaps[id].wordMap[index].team) {
          team.score++;
        }

        return team;
      });

      if (wordmaps[id].wordMap[index].team === 'black') {
        console.log('killer tile was found')
        wordmaps[id].loadingWinner = {
          team: getTeamMemberByName(guesser, wordmaps[id].teamMembers).team === 'red' ? 'blue' : 'red',
          reason: `${getTeamMemberByName(guesser, wordmaps[id].teamMembers).team} team chose the killer word!`
        }
      }

      const blueWins = wordmaps[id].wordMap.reduce((acc, { team, revealed }) => {
        if (team === 'blue') {
          return revealed && acc
        }
        return acc
        }, true)

      const redWins = wordmaps[id].wordMap.reduce((acc, { team, revealed }) => {
        if (team === 'red') {
          return revealed && acc
        }
        return acc
        }, true)

      if (redWins) {
        wordmaps[id].loadingWinner = {
          team: 'red',
          reason: `red team found all their words!`
        }
      }

      if (blueWins) {
        wordmaps[id].loadingWinner = {
          team: 'blue',
          reason: `blue team found all their words!`
        }
      }

      if (wordmaps[id].turn.clue.count === 0) {
        const turn = getNextTurn(wordmaps[id].turn, wordmaps[id].teams)
        wordmaps[id].activity.push(createStartTurn(turn.team, turn.type))
        wordmaps[id].turn = turn;
      }
      
      if (wordmaps[id].loadingWinner) {
        setTimeout(() => {
          console.log(id)
          wordmaps[id].winner = {...wordmaps[id].loadingWinner}
          wordmaps[id].loadingWinner = undefined
          wordmaps[id] = resetToMeetingRoom(wordmaps[id])
          io.to(id).emit('change-adventure', wordmaps[id])
        }, 3000)
      }
      
      io.to(id).emit('change-adventure', wordmaps[id])
    }
  });

  socket.on('make-guesser', ({ value, name, id}) => {
    if (wordmaps[id]) {
      wordmaps[id].teamMembers = wordmaps[id].teamMembers.map(member => {
        if (name === member.name) {
          return {
            ...member,
            clueGiver: value
          }
        }
        return member;
      })
      io.to(id).emit('change-adventure', wordmaps[id])
    }
  });

  socket.on('disconnect', () => {
    if (wordmaps[socket.gameId]) {
      wordmaps[socket.gameId].teamMembers = wordmaps[socket.gameId].teamMembers.filter(({ name }) => name !== socket.username)
      if (wordmaps[socket.gameId].teamMembers.length > 0) {
        io.to(socket.gameId).emit('change-adventure', wordmaps[socket.gameId])
      } else {
        wordmaps[socket.gameId] = undefined;
      }
    }
  });

  // setTimeout(() => {
  //   io.sockets.in('1').emit('hello', 'welcome to room 1');
  // }, 1000)
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
