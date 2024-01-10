import '../style/Nav.scss';
import logo from '../images/logo.svg';
import { NavLink } from "react-router-dom";

//Fonction Nav qui affiche le logo, accueil et a propos. On utilise NavLink pour que les lien soit rapide, 
//et qu'il y a un 'class active' qui nous permet d'afficher une barre verticale en fonction de la page affcihé

function Nav() {
    return (
      <header className="Nav">
        <nav className="Nav-header">
        <img src={logo} className='Nav-logo' alt='logo-kasa'/>
          <ul className='Nav-menu'>
            <li><NavLink to={'/'}>Accueil</NavLink></li>
            <li><NavLink to={'/about'}>À propos</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;