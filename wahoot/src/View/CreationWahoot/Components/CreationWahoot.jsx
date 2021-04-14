import React from "react";
import ButtonCancel from "./ButtonCancel";
import ButtonHome from "./ButtonHome";
import ButtonQuestion from "./ButtonQuestion";
import ButtonSave from "./Buttonsave";
import QuestionsW from "./QuestionsW";



const CreationWahoot = () => {

    return (
        <div>
        <div>
            <QuestionsW/>
        </div>
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