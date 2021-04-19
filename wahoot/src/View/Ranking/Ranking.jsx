import React from 'react';
import ShowRanking from './Components/ShowRanking';
import WatchRightResButton from './Components/WatchRightResButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
  }));

const Ranking = () => {
    const classes = useStyles();
    return (
        <div className={classes.block}>
            <h2>CLASSEMENT</h2>
            <ShowRanking />
            <div style={{margin:"30px"}}><WatchRightResButton /></div>
        </div>
    )
};

export default Ranking;