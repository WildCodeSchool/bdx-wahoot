import { Box ,  makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    
    rep: {
        width: "35%",
        height: "100px",
        textAlign: 'center',
    }
  }));
  

const ResponsesPlayer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.rep} bgcolor="warning.main" onClick={()=>{}}>CSS</Box>
            <Box className={classes.rep} bgcolor="success.main">Français</Box>
            <Box className={classes.rep} bgcolor="primary.main">Japonais</Box>
            <Box className={classes.rep} bgcolor="error.main">Anglais</Box>
        </div>
    )
};

export default ResponsesPlayer;