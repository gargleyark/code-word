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
import { getAvatar } from 'utils/images';

const styles = {
  sender: {
    float: 'left',
    width: 40,
  }
};

const useStyles = makeStyles(styles);

export default function ChatMessage({
    avatarId,
    name,
    messages,
}) {
  const classes = useStyles();
  const [ messagePage, setMessagePage ] = useState(0);
  const avatar = getAvatar(avatarId);

  const incrementMessage = () => {
    setMessagePage(messagePage++);
  }

  return (
    <Card profile>
        <CardBody profile>
          <h6>{ name } says:</h6>
          <img src={avatar} className={classes.sender} />
          <p>
              {
                  messages[messagePage]
              }
          </p>
          {setMessagePage + 1 === messages.length ? <Button color="secondary" onClick={incrementMessage} variant="outlined" round>
              Next
          </Button> : <Button color="primary" variant="filled" round>
              Start event
          </Button>}
        </CardBody>
    </Card>
  );
}
