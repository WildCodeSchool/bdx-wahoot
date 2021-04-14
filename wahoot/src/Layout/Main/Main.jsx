import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';



function Main(props) {
    const {children} = props;
<<<<<<< HEAD
    return (        
        <div>
            <Header />            
            {children}
            <Footer />
        </div>
    )
=======

    return (

        <div>
            <Header />
            
                {children}
           
            <Footer />
           
        </div>

           
    );
>>>>>>> 033c02dca8d9b4970d0da0076777b2f9225c623c
}
export default Main;