import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';



function Main(props) {
    const {children} = props;
    return (

        <div>
            <Header />
            
<<<<<<< HEAD
                {children}
           
            <Footer />
           
=======
            {children}
            
            <Footer />

>>>>>>> b6cc858d830ab864b1163964a42286fb3d7a338f
        </div>

           
    );
}
export default Main;