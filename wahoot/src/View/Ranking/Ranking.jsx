import React, { useEffect, useState } from "react";
import WatchRightResButton from "./Components/WatchRightResButton";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

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
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px",
  },
}));

const Ranking = (props) => {
  const classes = useStyles();
  const wahootId = props.match.params.wahootId;
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    axios
      .get(`https://wahoot-api.herokuapp.com/ranking/${wahootId}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setRanking(data);
      });
  }, []);

  return (
    <div>
      <h2 className={classes.root}>CLASSEMENT</h2>
      <div className={classes.block}>
        <List>
          {ranking.map((player) => {
            return (
              <>
                <ListItem alignItems="flex-start" key={player._id}>
                  {/* <ListItemAvatar>
                  <Avatar>{player.position}</Avatar>
                </ListItemAvatar> */}
                  <ListItemText
                    primary={player?.player?.name}
                    secondary={player.points}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      </div>
      <div className={classes.root}>
        <WatchRightResButton wahootId={wahootId} />
      </div>
    </div>
  );
};

export default Ranking;
