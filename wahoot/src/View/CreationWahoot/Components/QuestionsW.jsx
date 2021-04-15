import React from "react";
import ButtonQuestion from "./ButtonQuestion";
    

    const displayElement = false;

    function QuestionsW () {
        return (
            <div>
                <div>
                    <h2>Questions du Wahoot</h2>
                </div>

                <div>
                    {displayElement && (<p>Pas de question pour le moment.</p>)}
                    {!displayElement && (<ButtonQuestion />)}
                
                </div>
            </div>
        );
    }

    export default QuestionsW;