import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from 'context/socket';

const useStyles = makeStyles(() => ({
    red: {
        background: 'indianred'
    },
    blue: {
        background: 'lightblue'
    }
}));

export default ({ children }) => {
    const { adventure } = useContext(SocketContext);
    const classes = useStyles();
    const username = window.localStorage.getItem('username');
    const { team } = adventure?.teamMembers.find(({ name }) => name === username) || {};
    
    return <div className={classes[team]}>{children}</div>
};