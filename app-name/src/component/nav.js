import '../style/Nav.scss';
import logo from '../images/logo.svg';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
      <div className="Nav">
        <header className="Nav-header">
        <img src={logo} className='Nav-logo' alt='logo-ksas'/>
          <ul className='Nav-menu'>
            <li><NavLink to={'/'}>Accueil</NavLink></li>
            <li><NavLink to={'/about'}>À propos de</NavLink></li>
          </ul>
        </header>
      </div>
    );
  }
  
  export default Nav;