import '../style/Nav.css';
import logo from '../images/logo.svg';

function Nav() {
    return (
      <div className="Nav">
        <header className="Nav-header">
        <img src={logo} className='Nav-logo' alt='logo-ksas'/>
          <ul className='Nav-menu'>
            <li> Accueil </li>
            <li> À propos de</li>
          </ul>
        </header>
      </div>
    );
  }
  
  export default Nav;