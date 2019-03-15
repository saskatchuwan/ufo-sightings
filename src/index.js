import { buildForceLayout } from './components/force-simulation';
import { createNodes } from '../create_nodes';
const rawData = require('../ufo-2013.json');



document.addEventListener('DOMContentLoaded', () => {
  
  window.createNodes = createNodes;
  window.rawData = rawData;
  
  //run simulation function
  buildForceLayout(rawData, 'eugene');
});