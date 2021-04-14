import React from "react";
import ButtonCancel from "./ButtonCancel";
import ButtonHome from "./ButtonHome";
import ButtonQuestion from "./ButtonQuestion";
import ButtonSave from "./Buttonsave";



const CreationWahoot = () => {

    return (
        <div>
        <h3>Questions du Wahoot</h3>
        <p>Pas de question pour le moment.</p>
        <div> 
          <ButtonSave/>
        </div>
       
        <div>
        <ButtonCancel/>  
        </div>
        <div>  
        <ButtonQuestion/>
        </div>
        <div>
        <ButtonHome/>
        </div>

        </div>
    );
}


export default CreationWahoot;