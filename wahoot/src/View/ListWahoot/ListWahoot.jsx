import React from 'react';
import CreateW from './Components/CreateW.jsx';
import QuestionnaireW from './Components/ListAffichageW.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent:"center",
  },
  block: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 30,
  }
}));

function ListWahoot() {
  const classes = useStyles();
    return (
    <div>
      <div> <QuestionnaireW /> </div>  
      <div> <CreateW/> </div>
    </div>
    );
}

export default ListWahoot;
