import React from "react";
import TableWahoot from "./TableWahoot";

    

    const displayElement = false;

    function AfficherListW () {
        return (
            
                <div>
                    {displayElement && (<p style={{textAlign:"center"}}>Aucun Wahoot pour l'instant.</p>)}
                    {!displayElement && (<TableWahoot/>)}
                
                </div>
            
        );
    }

    export default AfficherListW;