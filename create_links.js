import nodes from './create_nodes';

let links = [];

nodes.forEach(element => {
  let linkEntry = {
    target: element.groupName,
    source: `${element.id}`,
    strength: 0.1,
  };

  links.push(linkEntry);
});



export default links;