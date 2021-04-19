import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    
      p: {
          width: "50px",
          height: "50px",
          lineHeight: "20px",
          textAlign: "center",
          border: "solid 1px black",
          borderRadius: "50%",
    },
}));

const IncrementationChip = () => {

    const classes = useStyles();

    return (
        <div className={classes.p}>
             <p>1</p> 
        </div>
    );
}

export default IncrementationChip;