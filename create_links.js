// import nodes from './create_nodes';

// let links = [];

// nodes.forEach(element => {
//   let linkEntry = {
//     target: `${element.groupName}`,
//     source: `${element.id}`,
//     strength: 0.1,
//   };

//   links.push(linkEntry);
// });



// export default links;

import * as data from './ufo-2013.json';

let links = [
  { target: 'center', source: 'circle', strength: 0.1 },
  { target: 'center', source: 'triangle', strength: 0.1 },
  { target: 'center', source: 'cylinder', strength: 0.1 },
  { target: 'center', source: 'chevron', strength: 0.1 },
  { target: 'center', source: 'fireball', strength: 0.1 },
  { target: 'center', source: 'sphere', strength: 0.1 },
  { target: 'center', source: 'flash', strength: 0.1 },
  { target: 'center', source: 'formation', strength: 0.1 },
  { target: 'center', source: 'disk', strength: 0.1 },
  { target: 'center', source: 'changing', strength: 0.1 },
  { target: 'center', source: 'diamond', strength: 0.1 },
  { target: 'center', source: 'rectangle', strength: 0.1 },
  { target: 'center', source: 'cigar', strength: 0.1 },
  { target: 'center', source: 'egg', strength: 0.1 },
  { target: 'center', source: 'oval', strength: 0.1 },
  { target: 'center', source: 'teardrop', strength: 0.1 },
  { target: 'center', source: 'cross', strength: 0.1 },
  { target: 'center', source: 'cone', strength: 0.1 },
  { target: 'center', source: 'other', strength: 0.1 },
  { target: 'center', source: 'light', strength: 0.1 },
  { target: 'center', source: 'unknown', strength: 0.1 },
  { target: 'center', source: '', strength: 0.1 },

];

data.forEach(element => {
  let linkEntry;

  if (element.city === 'los angeles') {
    linkEntry = {
      // id: element.id,
      target: element.shape,
      source: `${element.id}`,
      strength: 0.7,
    };
    links.push(linkEntry);
  }

});

// console.log(links);

export default links;
