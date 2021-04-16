import React from 'react';
import NavigationBar from './NavigationBar';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent:"center",
  },
}));



const Footer = () => {

  const classes = useStyles();

    return (

        <div className={classes.container}>
        <NavigationBar />
        </div>
    );
  }


export default Footer;