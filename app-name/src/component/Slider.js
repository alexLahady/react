import "../style/Slider.scss";
import { useState } from "react";


function Slider(tab_img){
    const [count, setCount] = useState(0);

    const incremente = () => {
        let kasa_length = tab_img.length - 1 ;// important
        setCount(count < kasa_length ? count +1 : count - kasa_length);
    };

    const decremente = () => {
        //si truc est inférieur à 0
        //Alors mettre au max du tableau
        let kasa_length = tab_img.length - 1 ;
        setCount(count <= 0 ? count + kasa_length : count - 1);
    }

    return(
        <div className='slide'>
            <i onClick={decremente} class="fa-solid fa-chevron-left"></i>
            <img className="banner-appart-img" src={tab_img[count]} alt="appartement" />
            <i onClick={incremente} class="fa-solid fa-chevron-right"></i>
            <p>{count+1}/{tab_img.length}</p>
        </div>
    );
}

export default Slider;
/* faire un carousel avec les fléche afficher les images en fonction de celui afficher*/
/* utiliser un tableau pour les lien*/
/* faire des animation plus tard concentrons nous sur l'affichage */

