import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAdmin from './ButtonAdmin';
import ButtonJoueur from './ButtonJoueur';


const User =() => {

    return (

    <div>

     <Link to="/admin"><ButtonAdmin /></Link> 
         
     <Link to="/home-player"> <ButtonJoueur /> </Link>

    </div>
    );
    
}
export default User;