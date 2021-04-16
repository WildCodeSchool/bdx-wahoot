import React from 'react';
import User from './Components/User.jsx';
import WahootRules from './Components/WahootRules.jsx';
import { makeStyles } from '@material-ui/core/styles';
 


const useStyles = makeStyles((theme) => ({
  block: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 65,
      padding:10,
      
  },

  container:{
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      margin: 50,
  }
  
}));


function Home() {
  
  const classes = useStyles();

    return (
      <div>  
      <div className={classes.block} >
        <div> 
            <User/>
        </div>

        <div className={classes.container}>
            <WahootRules />
      </div>

      </div>
    </div> 
    );
}

export default Home;

