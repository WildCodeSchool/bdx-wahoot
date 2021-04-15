import React from 'react';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),  
      },
     
    position:"relative",
    bottom:0,
    marginLeft: "50%",
    
    },
  }));

 
const Footer = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
        <IconButton>
          < HomeIcon fontSize="large"  color="primary" />
        </IconButton>
        </div>
    );
  }

=======
import ButtonHome from '../../../View/CreationWahoot/Components/ButtonHome';
import HomeButtonModal from './HomeButtonModal';




function Footer() {
return (
    <div>
        
        <HomeButtonModal />
      

    </div>
);
}
>>>>>>> b6cc858d830ab864b1163964a42286fb3d7a338f

export default Footer;