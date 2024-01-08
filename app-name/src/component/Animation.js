import React from 'react'; 
import '../style/Animation.scss';


function Animation(id, titre, element,key){
    const hidden = () => {
        let element = document.getElementById(id);
        let text = document.getElementById("p"+id);
        let anime = document.getElementById("anime"+id);
  
        if(element.classList == "fa-solid fa-chevron-up"){
            element.classList = "fa-solid fa-chevron-down ";
            text.classList = "conditionalClose";
            anime.classList = "anime anime-margin-up";
            
        }else{
            element.classList = "fa-solid fa-chevron-up";
            text.classList = "conditionalOpen";
            anime.classList = "anime anime-margin-down";
        }
        console.log(anime);
      }
    

    return(
        <div key={key} id={"anime"+id} className="anime">
            <div>
                <h2>{titre}</h2>
                <i onClick={hidden} id={id} className="fa-solid fa-chevron-up"></i>
            </div>
            <span id={"p"+id}>{element}</span>
      </div>
    );
}

export default Animation;