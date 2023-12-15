import '../style/Nav.css';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div className="Nav">
        <header className="Nav-header">
        <img src={logo} className='Nav-logo' alt='logo-ksas'/>
          <ul className='Nav-menu'>
            <li><Link to={'./'}>Accueil</Link></li>
            <li><Link to={'./about'}>À propos de</Link></li>
          </ul>
        </header>
      </div>
    );
  }
  
  export default Nav;