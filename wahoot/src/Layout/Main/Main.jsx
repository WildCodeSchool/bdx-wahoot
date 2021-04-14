import React from 'react';
import Header from './Header/Header.jsx';




function Main(props) {
    const {children} = props;

    return (

        
        <div>
            <Header/>
            {children}
            <div></div>
        </div>
    );
}

export default Main;