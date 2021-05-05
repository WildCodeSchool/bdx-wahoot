import React, { useEffect, useState } from "react";
import WatchRightResButton from "./Components/WatchRightResButton";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  block: {
    width: "100%",
    maxWidth: "36ch",
    margin: "10px auto",
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
    textAlign: "center",
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
    <div className={classes.root}>
      <div className={classes.block}>
        <h2>CLASSEMENT</h2>
        <List>
          {ranking.map((player) => {
            return (
              <>
                <ListItem alignItems="flex-start" key={player._id}>
                  <ListItemText
                    primary={`${player?.player?.name} : `}
                    secondary={`${player.points} points`}
                  />
                </ListItem>
                <Divider variant="outset" component="li" />
              </>
            );
          })}
        </List>
      </div>
      <WatchRightResButton wahootId={wahootId} />
    </div>
  );
};

export default Ranking;
