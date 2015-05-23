// Let's draw something

var body = d3.select("body"); //stick things in the body tag
var graphics = body.append("svg"); //scaleable visual graphics

var width = 900;
var height = 600;

graphics.attr("width", width);
graphics.attr("height", height);


graphics.append("rect")
    .attr("x", 182)
    .attr("y", 200 -80)
    .attr("height", 80)
    .attr("width", 50);

graphics.append("rect")
    .attr("x", 235)
    .attr("y", 200 - 64)
    .attr("height", 64)
    .attr("width", 50);

graphics.append("rect")
    .attr("x", 288)
    .attr("y", 200 - 70)
    .attr("height", 70)
    .attr("width", 50);

graphics.append("rect")
    .attr("x", 341)
    .attr("y", 200 - 179)
    .attr("height", 179)
    .attr("width", 50);


graphics.append("line") //y
    .attr("x1", 180)
    .attr("y1", 0)
    .attr("x2", 180)
    .attr("y2", 200)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);

graphics.append("line") //x
    .attr("x1", 180) //BEGINING
    .attr("y1", 200)
    .attr("x2", 400) // END
    .attr("y2", 200)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);

graphics.append("text")
    .text("X Axis")
    .attr("x", 410  )
    .attr("y", 200)


graphics.append("text")
    .text("Y Axis")
    .attr("x", 130)
    .attr("y", 15)

graphics.append("circle") //y
    .attr("r", 100)
    .attr("cx", 300)
    .attr("cy", 400)
    .style("fill", "#4682B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0.5");


graphics.append("ellipse") //y
    .attr("rx", 15)
    .attr("ry", 20)
    .attr("cx", 265)
    .attr("cy", 360)
    .style("fill", "#000000")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0.5");
graphics.append("ellipse") //y
    .attr("rx", 15)
    .attr("ry", 20)
    .attr("cx", 330)
    .attr("cy", 360)
    .style("fill", "#000000")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0.5")



var arc = d3.svg.arc()
    .innerRadius(60)
    .outerRadius(0)
    .startAngle(1.6)
    .endAngle(4.7);



graphics.append("path")
    .attr("d", arc)
    .attr("transform", "translate(297,410)")
;