import axios from "axios";
import React from "react";
import CardsWahootList from "./CardsWahootList";


const displayElement = false;


function ListAffichageW() {
  

  return (
    <div>
      {displayElement && (
        <p style={{ textAlign: "center" }}>Aucun Wahoot pour l'instant.</p>
      )}
      {!displayElement && 
      <CardsWahootList form={form}/>}
    </div>
  );
}

export default ListAffichageW;
