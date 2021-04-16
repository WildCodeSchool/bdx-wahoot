import React from "react";
import TableWahoot from "./TableWahoot";

    

    const displayElement = false;

    function QuestionnaireW () {
        return (
            
                <div>
                    {displayElement && (<p>Aucun Wahoot pour l'instant.</p>)}
                    {!displayElement && (<TableWahoot/>)}
                
                </div>
            
        );
    }

    export default QuestionnaireW;