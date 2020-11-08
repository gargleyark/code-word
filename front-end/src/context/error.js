import React, { useState, useContext, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';  
import { Redirect } from "react-router-dom";

import { SocketContext } from 'context/socket';



export const ErrorProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const { error, setError } = useContext(SocketContext);

    useEffect(() => setOpen(!!error), [error])

    const handleClose = (event, reason) => {
        setOpen(false);
        setError(null);
    };
    
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return <div>{children}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
          {
            !window.location.href.match(/\/create/) && <Redirect to="adventure/create"/>
          }
        </Alert>
      </Snackbar></div>
};