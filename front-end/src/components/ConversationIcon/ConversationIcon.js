import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import ForumIcon from '@material-ui/icons/Forum';

// core components
import styles from "assets/jss/material-dashboard-react/components/conversationStyle.js";

const useStyles = makeStyles(styles);

export default function ConversationIcon(props) {
  const classes = useStyles();
  const { notificationCount, onClick, ...rest } = props;

  console.log(notificationCount)

  return (
    <Tooltip title="Start event" className={classes.conversation} { ...rest}>
      <IconButton aria-label="start event" disabled={notificationCount === 0} onClick={onClick}>
        <Badge badgeContent={notificationCount} className={classes.icon}>
          <ForumIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

ConversationIcon.propTypes = {
  notificationCount: PropTypes.number,
  onClick: PropTypes.func,
};
