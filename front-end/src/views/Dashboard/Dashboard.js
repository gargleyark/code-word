import React, { useContext } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import DateRange from "@material-ui/icons/DateRange";
import NotListedLocation from "@material-ui/icons/NotListedLocation";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Event from "components/Event/Event.js";
import { SocketContext } from 'context/socket';
import { Redirect } from "react-router-dom";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const extraStyles = {
  center: {
    textAlign: 'center'
  }
}

const useStyles = makeStyles({...styles, ...extraStyles});

export default function Dashboard() {
  const { adventure, joinAdventure, startGame } = useContext(SocketContext);
  const classes = useStyles();
  const username = window.localStorage.getItem('username')
  const gameId = window.location.search.match(/\d+/);

  if (!adventure && gameId && username) {
    joinAdventure(username, gameId[0]);
    console.log('hello')
    return <div>Joining adventure...</div>
  }

  if (!adventure && !gameId) {
    return <Redirect to="/adventure/create" />;
  }

  if (adventure.stage === 'game') {
    return <Redirect to={`/adventure/game/?id=${adventure.id}`} />
  }

  const colourMap = {
    red: 'danger',
    blue: 'info'
  }

  let roomOwner = adventure.teamMembers[0].name === username;
  

  return (
    <div>
      <GridContainer>
        {adventure.winner && <GridItem container xs={12} sm={12} md={12} lg={12} xl={12}>
          <GridItem xs={12} sm={10} md={8} lg={8} xl={6}>
            <Card chart className={classes.center}>
              <CardHeader color={colourMap[adventure.winner.team]}>
                <h1>🎉 {`${adventure.winner.team.replace(/^./, char => char.toUpperCase())} win!`} 🎉</h1>
              </CardHeader>
              <CardBody>
                <h3>{adventure.winner.reason.replace(/^./, char => char.toUpperCase())}</h3>
              </CardBody>
            </Card>
          </GridItem>
        </GridItem>}
          {
            adventure.teamMembers.map(({ name, team, clueGiver }, index) => 
            <GridItem xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card chart>
                <CardHeader color={colourMap[team]}>
                  <AccountCircleIcon style={{ fontSize: 140, margin: 'auto', display: 'block' }} />
                </CardHeader>
                <CardBody>
                  <h2 className={classes.cardTitle}>{ name }</h2>
                  <p className={classes.cardCategory}>
                  {!index && 'Waiting room owner'}&nbsp;
                  </p>
                  {clueGiver ? <p className={classes.cardCategory}>
                    Will be giving the clue
                  </p> : <p className={classes.cardCategory}>
                    Will be guessing
                  </p>}
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> waiting to play
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          )}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4} lg={2}>
        <Card chart><Box p={4} textAlign="center">
        <p>{adventure.teamMembers.length < 4 ? 'At least 4 players required to start!' : ''}</p>
          {roomOwner ?
            <Button variant="contained" color="success" size="large" disabled={adventure.teamMembers.length < 1} onClick={startGame}>
              Start
            </Button>
          : 'Only the room owner can start the game.'}</Box>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
