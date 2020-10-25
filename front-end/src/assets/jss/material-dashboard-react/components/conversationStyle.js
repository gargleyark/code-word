import {
    successColor,
  } from "assets/jss/material-dashboard-react.js";

const conversationStyle = {
    conversation: {
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#111',
        },
        '&:disabled': {
            backgroundColor: 'grey'
        }
    },
    icon: {
        color: 'white',
        '& .MuiBadge-badge': {
            backgroundColor: 'red'
        }
    }
};

export default conversationStyle;
