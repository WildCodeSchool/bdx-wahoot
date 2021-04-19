import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EditIconLink from './EditIcon';
import PublicModal from './PublicModal';
import SupprimeModal from './SupprimeModal';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      margin:'10px auto',
      '& h2':{
          textAlign:"center",
      },
      '& h3':{
          width:"40px",
          height:"40px",
          textAlign:"center",
          lineHeight:"40px",
          border:"solid 1px black",
          borderRadius:"50%",
          backgroundColor:"#7fe8a4"
      },
  
    },
    inline: {
      display: 'inline',
    },
    icons:{
        display:"flex",
        justifyContent:"flex-start",
    }
    
  }));
  
  const CardsWahootList = ()=> {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
      <h2>Liste des Wahoots</h2>
          <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W1</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="PHP"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Brouillon
                      </Typography>
                      {" — 12/07/2020"}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
  
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W2</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="Javascript"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Publié
                      </Typography>
                      {" — 14/03/2021"}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W3</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="HTML"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Publié
                      </Typography>
                      {' — 07/04/2021'}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W1</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="PHP"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Brouillon
                      </Typography>
                      {" — 12/07/2020"}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
  
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W2</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="Javascript"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Publié
                      </Typography>
                      {" — 14/03/2021"}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>W3</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="HTML"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                          Publié
                      </Typography>
                      {' — 07/04/2021'}
                      <div className={classes.icons}><EditIconLink /><PublicModal /><SupprimeModal /></div>
                      </React.Fragment>
                  }
                  />
              </ListItem>
      </List>
    );
  }
  
  export default ListW;
  
  

 