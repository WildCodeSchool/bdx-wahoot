import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import EditIconLink from "./EditIcon";
import PublicModal from "./PublicModal";
import SupprimeModal from "./SupprimeModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(30px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    borderRadius: "10px",
    webki: "10px",
    color: "rgb(31, 31, 31)",
    margin: "40px auto",

    "& h2": {
      textAlign: "center",
    },
    "& h3": {
      width: "40px",
      height: "40px",
      textAlign: "center",
      lineHeight: "40px",
      border: "solid 1px black",
      borderRadius: "50%",
      backgroundColor: "#7fe8a4",
    },
  },
  inline: {
    display: "inline",
  },
  icons: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

const CardsWahootList = ({ form, onDeleteWahoot }) => {
  const classes = useStyles();

  return (
    form && (
      <List className={classes.root}>
        <h2>Liste des Wahoots</h2>
        {form.map((wahoot, index) => (
          <div key={wahoot._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <h3>W{index + 1}</h3>
              </ListItemAvatar>
              <ListItemText
                primary={wahoot.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {wahoot.status}
                    </Typography>
                    — {wahoot.endDate}
                    <div className={classes.icons}>
                      <EditIconLink wahootId={wahoot._id} />
                      <PublicModal />
                      <SupprimeModal
                        onDelete={onDeleteWahoot}
                        wahootId={wahoot._id}
                      />
                    </div>
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    )
  );
};

export default CardsWahootList;
