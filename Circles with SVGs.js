var dataset = [ 5, 10, 15, 20, 25 ];
    //Width and height
    var w = 500;
    var h = 50;

    var svg = d3.select("body") //Create SVG element
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    var circles = svg.selectAll("circle") // will return empty refereces to all circles 
        .data(dataset) //binds our data to the elements
        .enter()      // little confused by this part 
        .append("circle"); //adds circle to the DOM 
/* this talls the reference to all circles and sets the cx attrbitue for each */
    circles.attr("cx", function(d, i) { //cx is the x-position valeu of the center of the circle 
                return (i * 50) + 25;
            })
           .attr("cy", h/2) //cy is the y-position value of the center of each circle 
           .attr("r", function(d) { //the radius r of each circle is simply set to d 
                return d;
           })
           .attr("fill", "rgb(224, 176, 255)") //you can address color in differnet eays with their #RBG code or by Hex Code #1234
           .attr("stroke", "purple")
           .attr("stroke-width", function(d) {
                return d/2;
           });