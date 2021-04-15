import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),  
        position: "absolute",
        bottom:0,
      },
    },
  }));

 
const Footer = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
        <IconButton>
          < HomeIcon fontSize="large"  color="primary" />
        </IconButton>
        </div>
    );
  }


export default Footer;