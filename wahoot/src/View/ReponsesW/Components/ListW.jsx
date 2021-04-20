import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
 import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: 'primary.main',
      margin:'10px auto',
      
      '& h2':{
          textAlign:"center",
      },
      '& h3':{
          width:"40px",
          height:"40px",
          textAlign:"center",
          lineHeight:"40px",
          color:'white',
          borderRadius:"50%",
          backgroundColor:" #3932bf"
          
      },
  
    },
    inline: {
      display: 'inline',
      color:"grey",
    },
 

  }));
  
  const ListW = ()=> {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
          <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>Q1</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="Quel langage utilise t'on pour le style?" 
                  secondary={
                      <React.Fragment>
                      <Typography   
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                          
                      >
                         Bonne réponse :  CSS
                      </Typography>
                    
  
                      </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>Q2</h3>
                  </ListItemAvatar>
                  <ListItemText 
                 primary= "Quels sont les langages back-end?"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"  
                      >
                          Bonne réponse: PHP, JAVA
                      </Typography>
                     
                       </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>Q3</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="Comment déclarer t'on une variable?"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                         Bonne réponse: avec let ou const
                      </Typography>
                    
                       </React.Fragment>
                  }
                  />
              </ListItem>
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <h3>Q4</h3>
                  </ListItemAvatar>
                  <ListItemText
                  primary="Que veut dire API?"
                  secondary={
                      <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                      >
                        Bonne réponse : Application Programming Interface
                      </Typography>
    
                      </React.Fragment>
                  }
                  />
              </ListItem>
   
      </List>
    );
  }
  
  export default ListW;
  
  

 