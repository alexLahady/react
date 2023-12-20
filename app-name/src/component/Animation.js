import React from 'react'; 
import '../style/Animation.scss';


function Animation(id, titre, element){//fait le carré rouge avec les animation
    //<i class="fa-solid fa-chevron-down"></i>
    //displeay:none
    const hidden = () => {
        let element = document.getElementById(id);
        let text = document.getElementById("p"+id);
        let anime = document.getElementById("anime"+id);
        
  
        if(element.classList == "fa-solid fa-chevron-up"){
            element.classList = "fa-solid fa-chevron-down";
            text.classList.add("anime-efface");
            anime.classList.add("anime-margin");
        }else{
            element.classList = "fa-solid fa-chevron-up";
            text.classList.remove("anime-efface");
            anime.classList.remove("anime-margin");
        }
        console.log(anime);
      }
    

    return(
        <div id={"anime"+id} className="anime">
            <div>
                <h2>{titre}</h2>
                <i onClick={hidden} id={id} class="fa-solid fa-chevron-up"></i>
            </div>
            <p id={"p"+id}>{element}</p>
      </div>
    );
}

export default Animation;