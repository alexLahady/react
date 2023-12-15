import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

//JSX de notre site
import App from './component/App';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Banner from './component/Banner';

import Main from './main';

import reportWebVitals from './reportWebVitals';

//On affiche ici
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
