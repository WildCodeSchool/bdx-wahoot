import React from "react";
import ButtonQuestion from "./ButtonQuestion";
import { makeStyles } from '@material-ui/core/styles'; 
    

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent:"center",
      margin: 20,
    },
    question: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#3f51b5",
        border: "solid 1px",
        borderRadius: "10px",    
    },
    p: {
        textAlign:"center",
        color: "white",
    }
  }));

    const displayElement = false;

    function QuestionsW () {

        const classes = useStyles();

        return (
            <div>
                <div className={classes.container}>
                 <h2>Questions du Wahoot</h2>
                </div>
                <div className={classes.question}>
                    {displayElement && (<p className={classes.p}>Pas de question pour le moment.</p>)}
                    {!displayElement && (<ButtonQuestion />)}
                </div>
            </div>
        );
    }

    export default QuestionsW;