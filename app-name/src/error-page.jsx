import { useRouteError } from "react-router-dom";
import Nav from './component/Nav.js';
import './error-page.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Nav />
      <h1 className='error-404'>404</h1>
      <p className='error-text'>Oups! la page que vous demandez n'existe pas.</p>
      <div className='error-link'> 
        <a href='./'>Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}