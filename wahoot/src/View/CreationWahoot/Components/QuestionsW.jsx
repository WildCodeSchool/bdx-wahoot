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
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(30px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
        borderRadius: "10px",
        webki: "10px",
        color: "rgb(31, 31, 31)",
        margin: "40px auto",
        textAlign: "center",
    },
    p: {
        textAlign:"center",
        color: "white",
    }
  }));

    const displayElement = !true;

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