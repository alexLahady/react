import React from 'react'; 

import Nav from '../component/Nav';
import Footer from '../component/Footer';

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
                <img className="banner-appart-img" src={res.cover} alt={res.title} />
            </div>
            <div className="grid-appart">
                <div className="title-appart">
                    <h1>{res.title}</h1>
                    <span>{res.location}</span>
                </div>
                <div className="tag-appart">
                    <ul>
                        {res.tags.map((tag) => <li>{tag}</li>)}
                    </ul>
                </div>
                <div className="host-appart">
                    <div>
                        <h2>{res.host.name}</h2>
                        <img src={res.host.picture} alt="profile" />
                    </div>
                    <span>
                        {tab.map((istrue) => 
                            istrue ? <i class="fa-solid fa-star"></i> : <i class="fa-solid fa-star isfalse"></i>
                        )}
                    </span>
                </div>
                <div className="description-appart">
                    <div className="infos">
                        <div>
                            <h2>Description</h2>
                            <i class="fa-solid fa-chevron-up"></i>
                        </div>
                        <p>{res.description}</p>
                    </div>
                </div>
                <div className="equipement-appart">
                    <div className="infos">
                        <div>
                            <h2>Équipement</h2>
                            <i class="fa-solid fa-chevron-up"></i>
                        </div>
                        <p>
                            <ul>
                                {res.equipments.map((equip) => <li>{equip}</li>)}
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

