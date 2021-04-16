import React from "react";
import CardsWahootList from "./CardsWahootList";

    

    const displayElement = false;

    function ListAffichageW () {
        return (
            
                <div>
                    {displayElement && (<p style={{textAlign:"center"}}>Aucun Wahoot pour l'instant.</p>)}
                    {!displayElement && (<CardsWahootList />)}
                
                </div>
            
        );
    }

    export default ListAffichageW;