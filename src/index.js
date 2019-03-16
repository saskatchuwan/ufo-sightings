import { buildForceLayout } from './components/force-simulation';
import { createNodes } from '../create_nodes';
import { createSelect, getSelectedText } from './components/select';
const rawData = require('../ufo-2013.json');



document.addEventListener('DOMContentLoaded', () => {

  window.createNodes = createNodes;
  window.rawData = rawData;

  //run simulation function
  buildForceLayout(rawData, 'boston');

  //build select box
  createSelect();
});


const setCity = (cityInput) => {
  console.log('city input');
  console.log(cityInput);
  buildForceLayout(rawData, cityInput);
};

document.getElementById("city-select").addEventListener('change', (e) => {
  e.preventDefault();
  setCity(getSelectedText("city-select"));
});


