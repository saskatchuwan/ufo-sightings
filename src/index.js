import { buildForceLayout } from './components/force-simulation';
import { createNodes } from '../create_nodes';
import { createSelect, getSelectedText } from './components/select';
const rawData = require('../ufo-2013.json');


document.addEventListener('DOMContentLoaded', () => {

  // just for testing
  window.createNodes = createNodes;
  window.rawData = rawData;

  //run simulation function
  buildForceLayout(rawData, 'los angeles');

  //build select box
  createSelect();
});


document.getElementById("city-select").addEventListener('change', (e) => {
  e.preventDefault();
  buildForceLayout(rawData, getSelectedText("city-select"));
});


