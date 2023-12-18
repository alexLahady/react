import '../style/Footer.scss';
import logo from '../images/logo.svg';

function Footer() {
    return (
      <div className="Footer">
        <header className="Footer-header">
            <img src={logo} className="Footer-logo" alt='logo-kasa'/>
            <div className='Footer-text'>
                © 2020 kasa. All rights reserved
            </div>
        </header>
      </div>
    );
  }
  
  export default Footer;