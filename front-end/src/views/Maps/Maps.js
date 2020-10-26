import React, { useContext, useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ContactSupport from '@material-ui/icons/ContactSupport';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Redirect } from "react-router-dom";
import { SocketContext } from 'context/socket';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 4,
    textAlign: 'center',
    height: 100,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 500,
    textTransform: 'capitalize'
  },
  clickable: {
    cursor: 'pointer',
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.7,
    }
  },
  row: {
    justifyContent: 'center',
  },
  blue: {
    background: 'repeating-radial-gradient( #aaf, lightblue 100%);'
  },
  red: {
    background: 'repeating-radial-gradient(indianred, #faa 100%);'
  },
  black: {
    background: 'repeating-radial-gradient(black, gray 100%);',
  },
  empty: {
    background: 'repeating-radial-gradient(bisque, antiquewhite 100%)'
  },
  unknown: {
    background: 'repeating-radial-gradient( #ccc, #aaa 100%);'
  },
  inputs: {
    height: 80,
    minWidth: 100,
  },
  activity: {
    alignContent: 'baseline',
    overflow: 'scroll',
    background: 'white',
    position: 'absolute',
    right: '0px',
    height: '80%'
  },
  winnerLoading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    marginTop: '20%',
    background: 'rgba(0,0,0,0.3)',
    padding: '20px',
  },
  revealed: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: '""',
      background: 'black',
      display: 'block',
      width: 2,
      height: '100%',
      transform: 'rotate(-45deg)',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto'
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      background: 'black',
      display: 'block',
      width: 2,
      height: '100%',
      transform: 'rotate(45deg)',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
    }
  }
}));

export default function Maps() {
  const { adventure, joinAdventure, turn, sendClue, sendGuess } = useContext(SocketContext);
  console.log(adventure)
  const classes = useStyles();
  const [viewType, setViewType] = useState();
  const [clue, setClue] = useState({ count: 1 });
  const gameId = window.location.search.match(/\d+/);
  const username = window.localStorage.getItem('username');
  const { team, clueGiver } = adventure?.teamMembers.find(({ name }) => name === username) || {};
  
  useEffect(() => {
    if (turn) {
      if (turn?.color === team) {
        setViewType(turn.type);
      } else {
        setViewType('waiting');
      }
    }
  }, [turn]);

  const createClue = nextClue => setClue({ ...clue, ...nextClue })
  
  if (!adventure && gameId && username) {
    joinAdventure(username, gameId[0]);
    console.log('hello')
    return <div>Joining adventure...</div>
  }

  if (!adventure && !gameId || !username) {
    return <Redirect to="/adventure/create" />;
  }

  if (adventure?.winner) {
    return <Redirect to={`/adventure/waitingroom?id=${gameId}`} />;
  }

  const FormRow = ({row}) => {
    return (
      <>
        {
          row.map(({ word, team: wordColor, revealed }) => <Grid item xs={2}>
            <Paper 
              className={`${classes.paper} ${clueGiver && revealed && classes.revealed} ${(clueGiver || revealed) && (classes[wordColor] || classes.empty) || classes.unknown} ${!clueGiver && turn?.team === team && classes.clickable}`}
              onClick={turn?.team === team && turn?.type === 'guess' && !clueGiver && (() => sendGuess({ word, guesser: username, id: adventure.id })) || undefined}
            ><span style={{ background: 'white', padding: '4px', borderRadius: '4px'}}>{word}</span></Paper>
          </Grid>)
        }
      </>
    );
  }


  console.log(turn, clueGiver, team)

  return (
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={adventure.loadingWinner}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={adventure.loadingWinner}>
          <Typography className={classes.winnerLoading}>
            <h1>🎉 {`${adventure.loadingWinner?.team.replace(/^./, char => char.toUpperCase())} win!`} 🎉</h1>
            <p>Loading waiting room...</p>
          </Typography>
        </Fade>
      </Modal>
    <Grid container spacing={1} xs={12}><Grid container spacing={1} xs={10}>
        
        {turn?.type === 'guess' && <Grid container classes={{root: classes.row}}><Card><h4 style={{margin: '15px'}}>{`${turn?.team} team guessing: ${turn?.clue?.word} (${turn.clue.count} word${turn.clue.count > 1 ? 's' : ''} left)`}</h4></Card></Grid>}
        {
          [0,4,8,12,16].map((position, index) => <Grid container item xs={12} spacing={3} classes={{root: classes.row}}>
            <FormRow row={[adventure.wordMap[position + index], adventure.wordMap[position + index + 1], adventure.wordMap[position + index + 2], adventure.wordMap[position + index + 3], adventure.wordMap[position + index + 4]] } />
          </Grid>)
        }
        <Grid container classes={{root: classes.row}}>
          {turn?.team === team && turn?.type === 'clue' && clueGiver && <Card><Grid item xs={12} container classes={{root: classes.row}}><Box p={4}><TextField
  className={classes.inputs}
id="input-with-icon-adornment"
label="Clue word"
value={clue.word}
onChange={ ({ target: { value }}) => createClue({ word: value})}
/></Box><Box p={4}><TextField
className={classes.inputs}
id="standard-number"
label="No. of words"
defaultValue={1}
InputProps={{ inputProps: { min: 1, max: 25 } }}
value={clue.count}
onChange={ ({ target: { value }}) => createClue({ count: value})}
type="number"
InputLabelProps={{
  shrink: true,
}}
/></Box><Box p={4}><Button variant="contained" color="success" disabled={!clue.count || !clue.word || clue.word.trim().match(/\s|\d|-/)} onClick={() => sendClue(clue.word.trim())}>Send clue!</Button></Box></Grid></Card>}
          {turn?.team === team && turn?.type === 'guess' && !clueGiver && <Card><Box p={4}>{`Think about the clue and click on ${turn.clue.count} word${turn.clue.count > 1 ? 's' : ''} to confirm your guess`}</Box></Card>}

        </Grid>
      </Grid>
      <Grid container spacing={1} xs={2} className={classes.activity}>
        {adventure.teams.map(({ score, color }) => <Grid classes={{ root: classes[color] }} item xs={12 / adventure.teams.length}>{score}</Grid>)}
        {adventure.activity.map(activity => <Grid item xs={12}>{activity}</Grid>)}
      </Grid>
    </Grid>
    </>
  );
}
