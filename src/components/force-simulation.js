import * as d3 from 'd3';
import * as util from '../util';

import { createNodes } from '../components/create_nodes';
import { createLinks } from '../components/create_links';
import { createTooltip, removeTooltip} from '../components/tooltip';


export const buildForceLayout = (rawData, cityName) => {

  //Create svg and set height & width
  const width = window.innerWidth * 0.6;
  const height = window.innerHeight;

  const svg = d3.select('svg');
  svg.attr('width', width).attr('height', height);
  
  //create nodes and links objects
  const nodes = createNodes(rawData, cityName);
  const links = createLinks(rawData, cityName);

  //remove components upon render
  svg.selectAll(".links").remove();
  svg.selectAll(".nodes").remove();
  svg.selectAll(".texts").remove();


  // simulation setup with all forces
  const linkForce = d3
    .forceLink()
    .id(link => link.id)
    .strength(link => link.strength);


  const simulation = d3
    .forceSimulation()
    .force('link', linkForce)
    .force('charge', d3.forceManyBody().strength(-100))
    .force("collide",d3.forceCollide())
    .force('center', d3.forceCenter(width / 2, height / 2));

  const dragDrop = d3.drag()
    .on('start', node => {
      node.fx = node.x;
      node.fy = node.y;
    })
    .on('drag', node => {
      simulation.alphaTarget(0.7).restart();
      node.fx = d3.event.x;
      node.fy = d3.event.y;
    })
    .on('end', node => {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      node.fx = null;
      node.fy = null;
  });


  //create link and node elements
  let linkElements = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
        .attr("stroke-width", 1)
        .attr("stroke", "rgba(50, 50, 50, 0.3)");

  let nodeElements = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("id", util.getCustomNodeId)
      .attr("r", util.setNodeRadius)
      .attr("fill", util.getNodeColor)
      .call(dragDrop)
      .on('click', createTooltip)
      .on('mouseout', removeTooltip);

    
  //start the simulation and define a tick function that is executed on every simulation tick
  function tickActions() {
    //update circle positions each tick of the simulation 
    nodeElements
      .attr('cx', util.getNodePosX)
      .attr('cy', util.getNodePosY);
      
    //update link positions 
    linkElements
      .attr('x1', util.getLinkSourcePosX)
      .attr('y1', util.getLinkSourcePosY)
      .attr('x2', util.getLinkTargetPosX)
      .attr('y2', util.getLinkTargetPosY);
  }
 
  //update the coordinates of both node and text elements
  simulation.nodes(nodes).on('tick', tickActions);

  //apply all links to the link source
  simulation.force("link").links(links);

};