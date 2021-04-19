import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(30px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
      borderRadius: "10px",
      webki: "10px",
      color: "rgb(31, 31, 31)",
      textAlign: "center"
    },
  }));


const ShowRanking = (rank, pseudo, points) => {

    const classes = useStyles();
    
      return (
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                1
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="pseudo1"  />
            <ListItemText secondary="1000 points" />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                2
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="pseudo2"  />
            <ListItemText secondary="960 points"/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                3
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="pseudo3"  />
            <ListItemText secondary="830 points"/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                4
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="pseudo4"  />
            <ListItemText secondary="700 points"/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                5
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="pseudo5"  />
            <ListItemText secondary="400 points"/>
          </ListItem>
        </List>
      );
    }

export default ShowRanking;