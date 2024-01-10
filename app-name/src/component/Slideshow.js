import "../style/Slideshow.scss";
import { useState } from "react";

//Fonction Slideshow permet de faire un carousel. Il marhe en fonction du tableau d'image reçu,
//et les flèche permet d'incrementer ou décrementer en fonction du clique de l'utilisateur,
//et faire une animation d'opacité à chaque clique

function Slideshow(tab_img){
    const [count, setCount] = useState(0);

    const incremente = () => {
        let kasa_length = tab_img.length - 1 ;// important
        setCount(count < kasa_length ? count +1 : count - kasa_length);
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
        let kasa_length = tab_img.length - 1 ;
        setCount(count <= 0 ? count + kasa_length : count - 1);
        document.getElementById('slide').animate(
            [
                {opacity : 0},
                {opacity : 1},
            ],
            {
                duration : 1000
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

export default Slideshow;
