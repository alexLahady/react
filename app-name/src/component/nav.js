import '../style/Nav.css';
import logo from '../images/logo.svg';

function Nav() {
    return (
      <div className="Nav">
        <header className="Nav-header">
        <img src={logo} className='Nav-logo' alt='logo-ksas'/>
          <ul className='Nav-menu'>
            <li><a href='./'>Accueil</a></li>
            <li><a href='#'> À propos de</a></li>
          </ul>
        </header>
      </div>
    );
  }
  
  export default Nav;