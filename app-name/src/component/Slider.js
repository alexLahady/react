import "../style/Slider.scss";
import { useState } from "react";


function Slider(tab_img){// on va rajouter une condition quand il y en a que une image
    const [count, setCount] = useState(0);

    const incremente = () => {
        let kasa_length = tab_img.length - 1 ;// important
        setCount(count < kasa_length ? count +1 : count - kasa_length);
        //elem.style.animation = taadaa;
        document.getElementById('slide').animate(
            [
                {opacity : 0},
                {opacity : 1},
            ],
            {
                duration : 2000
            },
        );
    };

    const decremente = () => {
        //si truc est inférieur à 0
        //Alors mettre au max du tableau
        let kasa_length = tab_img.length - 1 ;
        setCount(count <= 0 ? count + kasa_length : count - 1);
        document.getElementById('slide').animate(
            [
                {opacity : 0},
                {opacity : 1},
            ],
            {
                duration : 2000
            },
        );
    }

    return(
        <div className='slide'>
            <img id='slide'className="slide-img" src={tab_img[count]} alt="appartement" />
            {tab_img.length !== 1 ? <i onClick={incremente} className="fa-solid fa-chevron-right"></i> : <i></i>}
            {tab_img.length !== 1 ? <i onClick={decremente} className="fa-solid fa-chevron-left"></i> : <i></i>}
            {tab_img.length !== 1 ? <p>{count+1}/{tab_img.length}</p> : <p></p>}
        </div>
    );
}

export default Slider;
/* faire un carousel avec les fléche afficher les images en fonction de celui afficher*/
/* utiliser un tableau pour les lien*/
/* faire des animation plus tard concentrons nous sur l'affichage */

