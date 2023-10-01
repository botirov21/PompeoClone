import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/home';
import './index.css';
import Navbar from './navbar/navbar';
import Fotter from './footer/fotter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Home/>
  <Fotter/>
  </React.StrictMode>
);

