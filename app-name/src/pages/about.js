import React from 'react'; 
import '../style/About.scss';
import Nav from '../component/Nav';
import image from '../images/img-2.png';
import about from '../asset/about.json';

//faire une fonction pour les 4 infos avec des variables avec du texte et les titres


function About(){
    return(
    <div>
        <Nav />
        <div className="Banner">
            <header className="Banner-header">
            <img src={image} className='Banner-img' alt='une montagne sur la mer' />
            </header>
        </div>
        {about.map((tab) => (
        <div className="infos" key={tab.id}>
          <div>
                <h2>{tab.title}</h2>
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <p>{tab.text}</p>
        </div>
      ))}
    </div> 
    );
}

export default About;