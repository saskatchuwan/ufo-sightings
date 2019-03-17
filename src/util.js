export const getNodeColor = (node) => {
  if (node.level === 0) {
    return 'gray';
  } else if (node.level === 1) {
    return '#0A7547';
  } else {
    return '#F9A93C';
  }
};

export const getNodeLabel = (node) => (node.label);
export const getNodeId = (node) => (node.id);
export const getNodeDuration = (node) => (node.duration);
export const getNodePosX = (node) => (node.x);
export const getNodePosY = (node) => (node.y);

export const setNodeRadius = (node) => {
  if (node.level < 2) {
    return 9;
  } else {
    return Math.log10(node.duration) * 5;
  }
};

export const getCustomNodeId = (node) => {
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(node.id[0])) {
    return( "a" + node.id);
  } else {
    return node.id;
  }
};


export const getLinkSourcePosX = (link) => (link.source.x);
export const getLinkSourcePosY = (link) => (link.source.y);
export const getLinkTargetPosX = (link) => (link.target.x);
export const getLinkTargetPosY = (link) => (link.target.y);
