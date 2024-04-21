var dataset = [5,10,15,20,25]; // we can change this to multiple data points! 
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar") // We assign a class of bar 
    .style("height", function(d){
        var barHeight = d *5; 
        return barHeight + "px";
    }); //We set the height to be equal to our data value plus some pixels for spacing