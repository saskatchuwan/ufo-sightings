import * as d3 from 'd3';


d3.json("ufo-raw.json").then(function(data) {
  console.log(data);
});

console.log("Webpack is working");

const square = d3.selectAll("rect");
square.style("fill", "yellow");

d3.select("body").append("h1").text("I AM dfijgoidfjg");

let canvas = d3.select("body")
             .append("svg")
                .attr("width", 500)
                .attr("height", 500);

let circle = canvas.append("circle")
            .attr("cx", 250)
            .attr("cy", 250)
            .attr("r", 50)
            .attr("fill", "green");

