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

let links = [];

data.forEach(element => {
  let linkEntry;

  if (element.city === 'san francisco') {
    linkEntry = {
      // id: element.id,
      target: element.shape,
      source: `${element.id}`,
      strength: 0.1,
    };
    links.push(linkEntry);
  }

});

// console.log(links);

export default links;
