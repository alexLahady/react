import React from 'react'; 
import '../style/About.scss';

import Nav from '../component/Nav';
import Footer from '../component/Footer';
import about from '../asset/about.json';
import Banner from '../component/Banner';
import Animation from '../component/Animation';

import image from '../images/img-2.png';

//faire une fonction pour les 4 infos avec des variables avec du texte et les titres


function About(){
    return(
    <div>
        <Nav />
        {Banner(image,"paysage de montagne",false)}
        <div className="about-margin" >
          {about.map((tab) => 
            Animation(tab.id,tab.title,tab.text)
          )}
          
        </div>
      <Footer />
    </div> 
    );
}

export default About;