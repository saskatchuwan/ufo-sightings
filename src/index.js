import { buildForceLayout } from './components/force-simulation';
import { createNodes } from '../create_nodes';
const rawData = require('../ufo-2013.json');



document.addEventListener('DOMContentLoaded', () => {
  window.createNodes = createNodes;
  window.rawData = rawData;

  //run simulation function
  buildForceLayout(rawData, 'los angeles');
});


const setCity = (cityInput) => {
  console.log('city input');
  console.log(cityInput);
  buildForceLayout(rawData, cityInput);
};

document.getElementById("form").addEventListener('submit', (e) => {

  e.preventDefault();

  console.log('target value');
  console.log(e.target.value);

  // let elem = document.querySelector('#viz');
  // elem.parentNode.removeChild(elem);

  setCity(e.target.value);

});


