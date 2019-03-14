//---------------------
// https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811
//---------------------
import * as d3 from 'd3';

import baseNodes from './data/nodes';
import baseLinks from './data/links';

const nodes = [...baseNodes];
const links = [...baseLinks];

const width = window.innerWidth;
const height = window.innerHeight;

//select an svg element with d3, will function as a canvas for our graph later
const svg = d3.select('svg');

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
  .force('charge', d3.forceManyBody().strength(-120))
  .force('center', d3.forceCenter(width / 2, height / 2))


function getNodeColor(node) {
  return node.level === 1 ? 'red' : 'gray';
}

//The SVG <g> element is used to group SVG shapes together. 
//Once grouped you can transform the whole group of shapes as if 
//it was a single shape. This is an advantage compared to a nested <svg> 
//element which cannot be the target of transformation by itself.

let nodeElements = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
    .attr("r", 10)
    .attr("fill", getNodeColor);

    
let textElements = svg.append("g")
//text labels
  .attr("class", "texts")
  .selectAll("text")
  .data(nodes)
  .enter().append("text")
    .text(function (node) { return  node.label; })
	  .attr("font-size", 15)
	  .attr("dx", 15)
    .attr("dy", 4);


let linkElements = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
      .attr("stroke-width", 1)
      .attr("stroke", "rgba(50, 50, 50, 0.2)");


//start the simulation and define a tick function that is executed on every simulation tick
//update the coordinates of both node and text elements
  simulation.nodes(nodes).on('tick', () => {

    nodeElements
      .attr('cx', function (node) { return node.x; })
      .attr('cy', function (node) { return node.y; });

    textElements
      .attr('x', function (node) { return node.x; })
      .attr('y', function (node) { return node.y; });

    linkElements
      .attr('x1', function (link) { return link.source.x; })
      .attr('y1', function (link) { return link.source.y; })
      .attr('x2', function (link) { return link.target.x; })
      .attr('y2', function (link) { return link.target.y; });
  
  });

  //apply all links to the link source
  simulation.force("link").links(links);
