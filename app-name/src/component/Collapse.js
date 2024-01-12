import React from 'react'; 
import '../style/Collapse.scss';
import { useState } from "react";

//Fonction Collpase pour dérouler le texte en fonction de la flèche si elle est en haut ou en bas 

function Collapse(id, titre, element,key){
    const [arrow,  setArrow] = useState(1);

    const hidden = () => {
        let element = document.getElementById(id);
        let text = document.getElementById("p"+id);
        let anime = document.getElementById("anime"+id);
  
        if(arrow === 1){
            element.classList = "fa-solid fa-chevron-down anime-spin-down";
            text.classList = "conditionalOpen";
            anime.classList = "anime anime-margin-down";
            setArrow(arrow - 1);
            
        }else{
            element.classList = "fa-solid fa-chevron-down anime-spin-up";
            text.classList = "conditionalClose";
            anime.classList = "anime anime-margin-up";
            setArrow(arrow + 1);
        }
      }
    

    return(
        <div key={key} id={"anime"+id} className="anime anime-margin">
            <div>
                <h2>{titre}</h2>
                <i onClick={hidden} id={id} className="fa-solid fa-chevron-down"></i>
            </div>
            <span id={"p"+id} className="anime-hide">{element}</span>
      </div>
    );
}

export default Collapse;