import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0px",
  },
});

const NavigationBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Admin" icon={<PersonIcon />} />
      <BottomNavigationAction label="Accueil" icon={<HomeIcon />} />
      <BottomNavigationAction label="Joueur" icon={<VideogameAssetIcon />} />
    </BottomNavigation>
  );
};

export default NavigationBar;
