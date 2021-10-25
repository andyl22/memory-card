import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css'
import Angeloak from './images/angeloak.jpg'
import Baobab from './images/baobab.jpg'
import Dragonblood from './images/dragonblood.jpg'
import Ginko from './images/ginko.jpg'
import Japanesemaple from './images/japanesemaple.jpg'
import Methuselah from './images/methuselah.jpg'
import Pando from './images/pando.jpg'
import Rhodododendron from './images/rhododendron.jpg'
import Sakura from './images/sakura.jpg'
import Sequoia from './images/sequoia.jpg'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {Angeloak, Baobab, Dragonblood, Ginko, Japanesemaple, Methuselah, Pando, Rhodododendron, Sakura, Sequoia}
