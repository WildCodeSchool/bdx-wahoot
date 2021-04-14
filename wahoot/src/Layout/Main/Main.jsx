import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';



function Main(props) {
    const {children} = props;

    return (

        
        <div>
            <Header />
            
            {children}
            
            <Footer />

        </div>
    );
}

export default Main;