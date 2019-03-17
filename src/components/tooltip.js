import * as util from '../util';
import * as d3 from 'd3';

const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
  .attr("dx", 15)
  .attr("dy", 4);

const nodeInfo = (node) => (
  `${node.label}
  <br> 
  <ul>
    <li id='city'>City: ${node.city}</li>
    <li id='country'>Country: ${node.country}</li>
    <li id='duration'>Duration: ${node.durationFormatted}</li>
    <li id='shape'>Shape: ${node.groupName}</li>
  </ul>
  <p id='comment'>"${node.comment}"</p>
  `
);


export const createTooltip = (node) => {
  tooltip.html(nodeInfo(node))
      .style("top", d3.event.pageY + 10 + "px")
      .style("left", d3.event.pageX + 10 + "px")
      .style("opacity", 1);
};

export const removeTooltip = () => {
  tooltip.style("opacity", 0);
};



      // .on('click',function(d, i) {
      //   d3.select(this)
      //     .transition()
      //     .duration(100)
      //     .attr('r', 20)
      //     .attr('fill', util.getNodeColor); })
      // .on('mouseout', function(d, i) {
      //   // return the mouseover'd element
      //   // to being smaller
      //   d3.select(this)
      //     .transition()
      //     .duration(100)
      //     .attr('r', 10)
      //     .attr('fill', util.getNodeColor);
      // });
