export const getNodeColor = (node) => {
  if (node.level === 0) {
    return 'gray';
  } else if (node.level === 1) {
    return 'green';
  } else {
    return 'orange';
  }
};

export const getNodeLabel = (node) => (node.label);
export const getNodeDuration = (node) => (node.duration);
export const getNodePosX = (node) => (node.x);
export const getNodePosY = (node) => (node.y);

export const setNodeRadius = (node) => {
  console.log(node.duration);

  if (node.level < 2) {
    return 9;
  } else {
    return Math.log10(node.duration) * 5;
  }
};


export const getLinkSourcePosX = (link) => (link.source.x);
export const getLinkSourcePosY = (link) => (link.source.y);
export const getLinkTargetPosX = (link) => (link.target.x);
export const getLinkTargetPosY = (link) => (link.target.y);