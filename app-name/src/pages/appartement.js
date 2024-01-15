import React from 'react'; 

import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Collapse from '../component/Collapse';
import Slideshow from '../component/Slideshow';
import ErrorPage from '../error-page';

import '../style/Appartement.scss';
import kasa from '../asset/kasa.json';

import {useParams} from 'react-router-dom';


/* Fonction Appartement qui affiche toutes les informations données sur une page.
La page est dynamique et affiche une page différentes en fonction de l'id reçu. */

export default function Appatement(){
    const parametres = useParams();
    let res = {};
    let exist = false;
    for(let i=0; i<kasa.length;i++){
        if(kasa[i].id === parametres.id){
            res = kasa[i] ;
            exist = true;
            break;
        }
    }
    
    if(exist){

        let tab = [];
        let i = 0;

        while(i<5){
            i < res.rating ? tab.push(true) : tab.push(false);
            i++;
        }

        return (
            <div className="Appartement">
                <Nav />
                <div className="banner-appart">
                    {Slideshow(res.pictures)}
                </div>
                <div className="grid-appart">
                    <div className="title-appart">
                        <h1>{res.title}</h1>
                        <span>{res.location}</span>
                    </div>
                    <div className="tag-appart">
                        <ul>
                            {res.tags.map((tag,index) => <li key={index}>{tag}</li>)}
                        </ul>
                    </div>
                    <div className="host-appart">
                        <div>
                            <h2>{res.host.name}</h2>
                            <img src={res.host.picture} alt="profile" />
                        </div>
                        <span>
                            {tab.map((istrue, index) => 
                                istrue ? <i key={index} className="fa-solid fa-star"></i> : <i key={index} className="fa-solid fa-star isfalse"></i>
                            )}
                        </span>
                    </div>
                    <div className="description-appart">
                        {Collapse(res.id+'desc','Description',res.description)}
                    </div>
                    <div className='equipement-appart'>
                        {Collapse(res.id+'equip','Équipement', <ul>{res.equipments.map((equip,index) => <li key={index}>{equip}</li>)}</ul>)}
                    </div>
                </div>
                <Footer />
            </div>

        );
    }else{
        return(
            <div>
                <ErrorPage />
            </div>
        );
    }
}

