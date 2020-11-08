import React, { useEffect, useState, createContext } from 'react';
import { getLocation } from 'utils/location';

import io from 'socket.io-client';

export const SocketContext = createContext({
    socket: null,
    room: null,
    changeRoom: () => console.error('Unable to set room. Connection to server may not have initialised correctly.'),
});

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState();
    const [room, setRoom] = useState();
    const [adventure, setAdventure] = useState();
    const [redirect, setRedirect] = useState(false);
    const [stage, setStage] = useState();
    const [turn, setTurn] = useState();
    const [error, setError] = useState(null);

    const joinAdventure = (name, id, options) => {
        if (socket) {
            socket.emit('change-adventure', { name, id, options });
            console.log(name)
            setRoom(id);
        }
    };

    const makeGuesser = (guesser) => {
        console.log('here')
        if (socket) {
            console.log('emitting', guesser)
            socket.emit('make-guesser', guesser)
        }
    }

    const startGame = () => {
        if (socket) {
            socket.emit('start-game', { id: room });
        }
    }

    const sendClue = (clue) => {
        if (socket) {
            socket.emit('send-clue', {...clue, id: adventure.id});
        }
    }

    const sendGuess = (guess) => {
        console.log('sending guess', guess)
        if (socket) {
            socket.emit('send-guess', guess);
        }
    }

    useEffect(() => {
        // const newSocket = io('https://code-word.herokuapp.com');
        const newSocket = io('http://localhost:3000');

        setSocket(newSocket);

        return () => {
            if (newSocket) {
                newSocket.disconnect();
            }
        }
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('change-adventure', newAdventure => {
                setAdventure(newAdventure);
                setRoom(newAdventure.id);
                setStage(newAdventure.stage);
                setTurn(newAdventure.turn);

                console.log('got new adventure')

                if (!redirect) {
                    setRedirect(true);
                }
            });

            socket.on('start-game', newAdventure => {
                setAdventure(newAdventure);
                setStage(newAdventure.stage);
                setTurn(newAdventure.turn);

                console.log(newAdventure)
            });

            socket.on('failure', ({ message }) => setError(message))
        }
    }, [socket]);

    return <SocketContext.Provider value={{ socket, room, joinAdventure, redirect, adventure, stage, startGame, error, turn, sendClue, sendGuess, makeGuesser, setError }}>{ children }</SocketContext.Provider>
};