import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    logo: {
      display: "flex",
      maxWidth: "100%",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "20%",
      display:"none",
    },logomini: {
      //display:"none",
    }
  });
  
function Header() {

    const classes= useStyles();
return (
    <div>
        <img className={classes.logo} src="/Img/logoW.png" alt="logo-Wahoot-entête"/> 
        <img className={classes.logomini} src="/Img/LogoW-mini.svg" alt="logo-Wahoot-entête"/>
    </div>
);
}

export default Header;