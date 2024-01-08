import React from 'react'; 

import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Animation from '../component/Animation';
import Slider from '../component/Slider';

import '../style/Appartement.scss';
import kasa from '../asset/kasa.json';

import {useParams} from 'react-router-dom';

/* Faire une fonction qui va récupérer l'id et enregistrer et utiliser les bonnes données*/


export default function Appatement(){
    const parametres = useParams();
    let res = {};
    for(let i=0; i<kasa.length;i++){
        if(kasa[i].id === parametres.id){
            res = kasa[i] ;
            break;
        }
    }
    
    let tab = [];
    let i = 0;

    while(i<5){
        i < res.rating ? tab.push(true) : tab.push(false);
        i++;
    }
    //console.log(tab);

    return (
        <div className="Appartement">
            <Nav />
            <div className="banner-appart">
                {Slider(res.pictures)}
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
                    {Animation(res.id+'desc','Description',res.description)}
                </div>
                <div className='equipement-appart'>
                    {Animation(res.id+'equip','Équipement', <ul>{res.equipments.map((equip,index) => <li key={index}>{equip}</li>)}</ul>)}
                </div>
            </div>
            <Footer />
        </div>

    );
}

