import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import HomeButtonModal from './HomeButtonModal';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),  
      },
     
    position:"relative",
    bottom:0,
    marginLeft: "50%",
    
    },
  }));

 
const Footer = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
        <IconButton>
          < HomeIcon fontSize="large"  color="primary" />
         
        </IconButton>
        <HomeButtonModal />
        </div>
    );
  }


export default Footer;