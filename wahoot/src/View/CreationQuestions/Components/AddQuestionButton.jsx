import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';




const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1), 
        
      },

      extendedIcon: {
        marginRight: theme.spacing(1),

      },
    container: {
        display: "flex",
        justifyContent: "center",
    }
   
}));

const AddQuestionButton = () => {

    const classes = useStyles();


    return (
        <div>
            <Tooltip title="Ajouter une question" aria-label="add" size="medium" onClick={() => console.log("Crée new question et incrémente nbre questions")}>
                <Fab color="secondary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
      </div>
    );
}

export default AddQuestionButton;