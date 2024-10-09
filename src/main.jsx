import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import './index.css';
import '@theme-toggles/react/css/Within.css';
import { Toaster } from 'react-hot-toast';

setInterval(() => {
  cards.forEach((card) => {
    if (!card.style.getPropertyValue(`--color1`)) {
      card.style.setProperty(
        `--color1`,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      );
      card.style.setProperty(
        `--color2`,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      );
    }
  });
}, 7000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
      <Home />
      <div id="content-container">
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
      <Toaster />
    </div>
  </React.StrictMode>
);
