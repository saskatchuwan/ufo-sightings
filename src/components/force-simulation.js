//---------------------
// https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811
//---------------------

import { createNodes } from '../../create_nodes';
import { createLinks } from '../../create_links';

import * as d3 from 'd3';
import * as util from '../util';
import { createTooltip, removeTooltip} from '../components/tooltip';


const width = window.innerWidth * 0.6;
const height = window.innerHeight;


export const buildForceLayout = (rawData, cityName) => {
  let nodes = createNodes(rawData, cityName);
  let links = createLinks(rawData, cityName);

  console.log(nodes);
  console.log(links);

  //select an svg element with d3, will function as a canvas for our graph later
  const svg = d3.select('svg');

  svg.selectAll(".links").remove();
  svg.selectAll(".nodes").remove();
  svg.selectAll(".texts").remove();


  svg.attr('width', width).attr('height', height);


  // we use svg groups to logically group the elements together
  // const linkGroup = svg.append('g').attr('class', 'links');
  // const nodeGroup = svg.append('g').attr('class', 'nodes');
  // const textGroup = svg.append('g').attr('class', 'texts');


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


  //The SVG <g> element is used to group SVG shapes together. 
  //Once grouped you can transform the whole group of shapes as if 
  //it was a single shape. This is an advantage compared to a nested <svg> 
  //element which cannot be the target of transformation by itself.


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

  //.enter identifies any DOM elements that need to be added when the joined array is longer than the selection. It's defined on an update selection (the slection returne dby .data). .enter returns an enter slection, which basically represents the elements that need to be added. it's usually followed by a.ppend which adds elements to the DOM.

  let textElements = svg.append("g")
    .attr("class", "texts")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("id", util.getCustomNodeId)
      .text(util.getNodeLabel)
      .attr("visibility", "hidden")
  	  .attr("dx", 15)
      .attr("dy", 4);


  // let tooltip = d3.select("body").append("div")
  //   .attr("class", "tooltip")
  //   .style("opacity", 0)
  //   .attr("dx", 15)
  //   .attr("dy", 4);


    
  function tickActions() {
    //update circle positions each tick of the simulation 
    nodeElements
      .attr('cx', util.getNodePosX)
      .attr('cy', util.getNodePosY);
      
    //update link positions 
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around

    linkElements
      .attr('x1', util.getLinkSourcePosX)
      .attr('y1', util.getLinkSourcePosY)
      .attr('x2', util.getLinkTargetPosX)
      .attr('y2', util.getLinkTargetPosY);

  }

  //start the simulation and define a tick function that is executed on every simulation tick
  //update the coordinates of both node and text elements
  simulation.nodes(nodes).on('tick', tickActions);

  //apply all links to the link source
  simulation.force("link").links(links);

};