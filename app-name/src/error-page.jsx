import { Link } from "react-router-dom";
import Nav from './component/Nav';
import './error-page.scss';


export default function ErrorPage() {
  return (
    <div id="error-page">
      <Nav />
      <h1 className='error-404'>404</h1>
      <p className='error-text'>Oups! la page que vous demandez n'existe pas.</p>
      <div className='error-link'> 
        <Link to={'/'}>Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}