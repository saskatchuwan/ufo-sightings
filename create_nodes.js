export const createNodes = (rawData, cityName) => {

    let nodes = [];

    nodes = [
      { id: 'center', group: 100, label: 'Center', duration: 149, comment: "", level: 0 },
      { id: 'circle', group: 0, label: 'Circles', duration: 149, comment: "", level: 1 },
      { id: 'triangle', group: 1, label: 'Triangles', duration: 149, comment: "", level: 1 },
      { id: 'cylinder', group: 2, label: 'Cylinders', duration: 149, comment: "", level: 1 },
      { id: 'chevron', group: 3, label: 'Chevrons', duration: 149, comment: "", level: 1 },
      { id: 'sphere', group: 4, label: 'Spheres', duration: 149, comment: "", level: 1 },
      { id: 'fireball', group: 5, label: 'Fireballs', duration: 149, comment: "", level: 1 },
      { id: 'flash', group: 6, label: 'Flashes', duration: 149, comment: "", level: 1 },
      { id: 'formation', group: 7, label: 'Formations', duration: 149, comment: "", level: 1 },
      { id: 'disk', group: 8, label: 'Disks', duration: 149, comment: "", level: 1 },
      { id: 'changing', group: 9, label: 'Changings', duration: 149, comment: "", level: 1 },
      { id: 'diamond', group: 10, label: 'Diamonds', duration: 149, comment: "", level: 1 },
      { id: 'rectangle', group: 11, label: 'Rectangle', duration: 149, comment: "", level: 1 },
      { id: 'cigar', group: 12, label: 'Cigars', duration: 149, comment: "", level: 1 },
      { id: 'egg', group: 13, label: 'Eggs', duration: 149, comment: "", level: 1 },
      { id: 'oval', group: 14, label: 'Ovals', duration: 149, comment: "", level: 1 },
      { id: 'teardrop', group: 15, label: 'Teardrops', duration: 149, comment: "", level: 1 },
      { id: 'cross', group: 16, label: 'Crosses', duration: 149, comment: "", level: 1 },
      { id: 'cone', group: 17, label: 'Cones', duration: 149, comment: "", level: 1 },
      { id: 'other', group: 18, label: 'Others', duration: 149, comment: "", level: 1 },
      { id: 'light', group: 19, label: 'Lights', duration: 149, comment: "", level: 1 },
      { id: 'unknown', group: 20, label: 'Unknowns', duration: 149, comment: "", level: 1 },
      { id: '', group: 21, label: '', duration: 149, comment: "", level: 1 },
    ];

    let classification = {
      circle: {id: 0, label: 'Circles'},
      triangle: {id: 1, label: 'Triangles'},
      cylinder: {id: 2, label: 'Cylinders'},
      chevron: {id: 3, label: 'Chevrons'},
      sphere: {id: 4, label: 'Spheres'},
      fireball: {id: 5, label: 'Fireballs'},
      flash: {id: 6, label: 'Flashes'},
      formation: {id: 7, label: 'Formations'},
      disk: {id: 8, label: 'Disks'},
      changing: {id: 9, label: 'Changings'},
      diamond: {id: 10, label: 'Diamonds'},
      rectangle: {id: 11, label: 'Rectangle'},
      cigar: {id: 12, label: 'Cigars'},
      egg: {id: 13, label: 'Eggs'},
      oval: {id: 14, label: 'Ovals'},
      teardrop: {id: 15, label: 'Teardrops'},
      cross: {id: 16, label: 'Crosses'},
      cone: {id: 17, label: 'Cones'},
      other: {id: 18, label: 'Others'},
      light: {id: 19, label: 'Lights'},
      unknown: {id: 20, label: 'Unknowns'},
      '': {id: 21, label: ''},
      center: {id: 100, label: ''},
    };

    rawData.forEach(element => {
      let nodeEntry;

      if (element.city === cityName) {
        if (Object.keys(classification).includes(element.shape)) {
          nodeEntry = {id: `${element.id}`, 
            group: classification[element.shape].id, 
            label: element.datetime,
            groupName: element.shape,
            duration: element["duration (seconds)"],
            comment: element.comments,
            level: 2,
          };

          nodes.push(nodeEntry);
        }
      }

      
    });

  return nodes;
};


