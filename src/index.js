import { buildForceLayout } from './components/force-simulation';
import { createSelect, getSelectedText, setCityTitle } from './components/select';

const rawData = require('./data/ufo-2013.json');

import 'normalize.css';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
  //run simulation function
  buildForceLayout(rawData, 'los angeles');

  //build select box
  createSelect();
});


document.getElementById("city-select").addEventListener('change', (e) => {
  e.preventDefault();
  buildForceLayout(rawData, getSelectedText("city-select"));
  setCityTitle();
});


