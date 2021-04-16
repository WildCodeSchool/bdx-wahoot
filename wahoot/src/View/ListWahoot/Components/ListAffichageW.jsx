import React from "react";
import CreateW from "./CreateW";
import TableWahoot from "./TableWahoot";

    

    const displayElement = false;

    function QuestionnaireW () {
        return (
            
                <div>
                    {displayElement && (<p style={{textAlign:"center"}}>Aucun Wahoot pour l'instant.</p>)}
                    {!displayElement && (<TableWahoot/>)}
                
                </div>
            
        );
    }

    export default QuestionnaireW;