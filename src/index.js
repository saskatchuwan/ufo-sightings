import * as d3 from 'd3';

//---------------------
// Starter Data
//---------------------

let rawData;
d3.json("ufo-raw.json").then(function(data) {
  rawData = data;
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


let dataArray = [20, 40, 50];
let bars = canvas.selectAll("rect")
          .data(dataArray)
          .enter()
            .append("rect")
            .attr("width", function(d) {return d;})
            .attr("height", 50)
            .attr("y", function(d, i) {return i * 100;});

