import React from 'react'; 
import '../style/About.scss';

import Nav from '../component/Nav';
import Footer from '../component/Footer';
import about from '../asset/about.json';
import Banner from '../component/Banner';

import image from '../images/img-2.png';

//faire une fonction pour les 4 infos avec des variables avec du texte et les titres


function About(){
    return(
    <div>
        <Nav />
        {Banner(image,"paysage de montagne",false)}
        {about.map((tab) => (
        <div className="infos" key={tab.id}>
          <div>
                <h2>{tab.title}</h2>
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <p>{tab.text}</p>
        </div>
      ))}

      <Footer />
    </div> 
    );
}

export default About;