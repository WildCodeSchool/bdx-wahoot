import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage : "url('/Img/BG.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
}
}));


function Main(props) {
    const classes= useStyles();
    const {children} = props;
    return (

        <div className={classes.root}>
            <Header />
                {children}
            <Footer />
           
        </div>    
    );
}
export default Main;