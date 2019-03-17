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
  const htmlContent = (node.level > 1) ? nodeInfo(node) : node.label;

  tooltip.html(htmlContent)
      .style("top", d3.event.pageY + 10 + "px")
      .style("left", d3.event.pageX + 10 + "px")
      .style("opacity", 1);
};

export const removeTooltip = () => {
  tooltip.style("opacity", 0);
};

