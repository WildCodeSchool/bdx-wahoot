import React from 'react';
import User from './Components/User.jsx';
import WahootRules from './Components/WahootRules.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40%",
    }
  }));



function Home() {

  const classes = useStyles();
    return (
    
      <div>
      
        <div className={classes.block}><User/></div>
        
        <div className={classes.block}><WahootRules /></div>
        
      </div>
    );
}

export default Home;

