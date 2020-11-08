import React, { useState, useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles,  } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tabs from "components/Tabs/Tabs.js";
import { getLocation } from "utils/location.js";
import { SocketContext } from 'context/socket';
import { Redirect } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'; 
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MuiCard from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import avatar from "assets/img/logo_small.png";

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  number: {
    width: 200
  },
  center: {
    textAlign: 'center'
  },
  subtitle: {
    marginTop: -32
  },
  footer: {
    flexDirection: 'column',
    margin: 0,
    padding: 24,
    [theme.breakpoints.up("md")]: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  greyColours: {
    background: 'royalblue',
    color: '#eee'
  },
  cardBody: {
    padding: 0
  },
  absolute: {
    position: 'absolute' 
  },

});

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [useCustomSettings, setUseCustomSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(25);
  const [inputId, setInputId] = useState('');
  const [customWords, setCustomWords] = useState('');
  const [username, setUsername] = useState(window.localStorage.getItem('username') || '');
  const [expanded, setExpanded] = useState(username ? 'panel2' : 'panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  const classes = useStyles();

  const { joinAdventure, redirect, adventure, error } = useContext(SocketContext);
  
  useEffect(() => setIsLoading(false), [error])
  

  if (redirect) {
    console.log(adventure.id)
    return <Redirect to={`/${adventure.stage}/?id=${adventure.id}`} />
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardHeader>
              <h2 className={classes.center}>Code Word</h2>
              <p className={`${classes.center} ${classes.subtitle}`}>A secret game of hidden words.</p>
            </CardHeader>
            <CardBody className={classes.cardBody}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>{expanded === 'panel1' || !username ? 'Choose your name' : `Playing as: ${username}`}</Typography>
              </AccordionSummary>
                <AccordionDetails>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    value={username}
                    inputProps={
                      {onChange: e => {
                        window.localStorage.setItem('username', e.target.value)
                        setUsername(e.target.value)
                      }, value: username}
                    }
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disabled={!username}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Create or join room</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Tabs 
                    tabContent={
                      [

                        <CardFooter className={`${classes.footer} ${classes.greyColours}`}>
                 <Button variant="contained" color="danger" onClick={() => {
                    setIsLoading(true);
                    joinAdventure(username, null, useCustomSettings ? {
                      words: customWords,
                      count: wordCount,
                    }: null);
                  }}>
                    {
                      isLoading ? 'Loading...' : 'Create room'
                    }
                  </Button>
                  <MuiCard>
                    <Box p={4} display="flex" flexDirection="column">
                  <h4>Custom settings</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={useCustomSettings}
                        onChange={e => setUseCustomSettings(e.target.checked)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Use custom settings"
                  />
                  <TextField
                    label="Custom words"
                    disabled={!useCustomSettings}
                    multiline
                    defaultValue=""
                    variant="outlined"
                    onChange={e => setCustomWords(e.target.value)}
                  />
                  <p>Separate custom words with spaces</p>
                  <TextField
                    label="Words per game"
                    disabled={!useCustomSettings}
                    defaultValue={25}
                    InputProps={{ inputProps: { min: 8, max: 25 } }}
                    onChange={e => setWordCount(e.target.value)}
                    type="number"
                    className={classes.number}
                  /></Box></MuiCard>
                </CardFooter>,
                        <><GridContainer>
                          <GridItem xs={12} sm={12} md={5}>
                            <CustomInput
                              labelText="Room Name"
                              id="room"
                              inputProps={
                                {onChange: e => setInputId(e.target.value), autoFocus: true, className: classes.greyColours}
                              }
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </GridItem>
                        </GridContainer><CardFooter className={`${classes.footer} ${classes.greyColours}`}>
                        <Button variant="contained" color="danger" onClick={() => {
                    setIsLoading(true);
                    joinAdventure(username, inputId);
                  }} disabled={!inputId}>
                    {
                      isLoading ? 'Loading...' : 'Join room'
                    }
                  </Button>
                </CardFooter></>,
                      ]
                    }
                    tabHeaders={
                      ['Create Room', 'Join Room']
                    }
                  />

                </AccordionDetails>
              </Accordion>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
