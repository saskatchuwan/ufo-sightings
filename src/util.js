export const getNodeColor = (node) => {
  return (
    node.level === 1 ? 'green' : 'orange'
)};

export const getNodeLabel = (node) => (node.label);

export const getNodePosX = (node) => (node.x);
export const getNodePosY = (node) => (node.y);


export const getLinkSourcePosX = (link) => (link.source.x);
export const getLinkSourcePosY = (link) => (link.source.y);
export const getLinkTargetPosX = (link) => (link.target.x);
export const getLinkTargetPosY = (link) => (link.target.y);