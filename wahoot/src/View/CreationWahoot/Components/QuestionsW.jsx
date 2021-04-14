    import React from "react";
    

    const displayElement = false;

    function QuestionsW (props) {
        return (
            <div>
                <div>
                    <h2>Questions du Wahoot</h2>
                </div>

                <div>
                    {displayElement && (<p>Pas de question pour le moment.</p>)}
                    {!displayElement && (<p>rien</p>)}
                
                </div>
            </div>
        );
    }

    export default QuestionsW;