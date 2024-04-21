var dataset = [
    [5, 20],
    [480, 90], 
    [250, 50], 
    [100, 33], 
    [330, 95],
    [410, 12], 
    [475, 44], 
    [25, 67], 
    [85, 21], 
    [220, 88]
    ];
var w = 500; 
var h = 100; 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")

        .attr("cx", function(d) {  //mow each sigle datum d it itself an aray of values 
            return d[0]; //we need to use brakcet notation to acces its values 
        })
        .attr("cy", function(d) {
            return d[1];
        })
        .attr("fill", "blue")
        //Size 
        .attr("r", function(d){ //size 
            return Math.sqrt(h-d[1]);//huh?
        });
        //Label 
       // (Note:Add later )


