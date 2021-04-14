import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';



function Main(props) {
    const {children} = props;

    return (

        
        <div>
            <Header />
            
            {children}
<<<<<<< HEAD
            <div>footer</div>
=======
            
            <Footer />

>>>>>>> d8021b42d59dae4a48d4ffd6e1f97f88bb50bde1
        </div>
    );
}

export default Main;