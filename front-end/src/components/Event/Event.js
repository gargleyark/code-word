import React, { useState, useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
// core components
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import ConversationIcon from "components/ConversationIcon/ConversationIcon.js";
import { SocketContext } from 'context/socket';
import { getDistanceFromLatLonInKm } from 'utils/location';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList({
    avatar,
    type,
    description,
    id,
    completed,
    name,
    location: locationData
}) {
  const classes = useStyles();
  const [canStart, setCanStart] = useState();
  const { location } = useContext(SocketContext);

  console.log('window.latitude = ' + locationData.latitude)
  console.log('window.longitude = ' + locationData.longitude)

  useEffect(() => {
    const {
      coords: {
        latitude,
        longitude
      }
    } = location;

    const distance = getDistanceFromLatLonInKm(window.latitude || latitude, window.longitude || longitude, locationData.latitude, locationData.longitude);
    console.log(distance + 'km');
    setCanStart(distance < 0.05);
  }, [location]);

  return (
    <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>Event notification</h6>
          <h4 className={classes.cardTitle}>{ name } at {locationData.name}</h4>
          <p className={classes.description}>
              {
                  description
              }
          </p>
          {!canStart && !completed && <Typography color="error">Go to this location to start this event.</Typography>}
          {!completed ? <ConversationIcon notificationCount={canStart ? 1 : 0} /> : <Button color="primary" variant="outlined" round>
              See event notes
          </Button>}
        </CardBody>
    </Card>
  );
}
