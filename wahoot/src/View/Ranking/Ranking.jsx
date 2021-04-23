import React from 'react';
import WatchRightResButton from './Components/WatchRightResButton';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(30px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
        borderRadius: "10px",
        webki: "10px",
        color: "rgb(31, 31, 31)",
        textAlign: "center",
    }, root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px"
    }
}
));

const topRank = [{
    id: "123",
    position: "1",
    pseudo: "Jennifer",
    points: "10000 points"
}, {
    id: "124",
    position: "2",
    pseudo: "Poulidor",
    points: "1000 points"
}, {
    id: "125",
    position: "3",
    pseudo: "Toto",
    points: "100 points"
},
];

const Ranking = () => {
    const classes = useStyles();
    return (
        <div> <h2 className={classes.root}>CLASSEMENT</h2>
            <div className={classes.block}>
                {topRank.map((player) => {
                    return (
                        <List >
                            <ListItem alignItems="flex-start" key={player.id}>
                                <ListItemAvatar>
                                    <Avatar>{player.position}</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={player.pseudo}
                                    secondary={player.points}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    )
                })}
            </div>
            <div className={classes.root}><WatchRightResButton /></div>
        </div>
    )
};

export default Ranking;