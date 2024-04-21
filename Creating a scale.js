var dataset = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];
    var w = 600;
    var h = 250;
	var padding = 20; //to fix
//Setting up Dynamic Scales//Scale functions  
var xScale = d3.scaleLinear()  //Now a scale is a funtion to which you can pass input values 
                .domain([0, d3.max(dataset, function(d){ return d[0];})]) //d3.max(dataset) loops thorugh each value in the array and identifies the largest one; with the an accessor function it specifies hot ot acess the value to be used for comparison
                .range([padding, w-padding*2]);
var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                .range([h-padding,padding]); 
/*rScale = d3.scaleLinear()
			.domain([0, d3.max(dataset, function(d) { return d[1]; })])
			.range([2, 5]);*/
var aScale = d3.scaleSqrt()
				.domain([0, d3.max(dataset, function(d) { return d[1]; })])
				.range([0, 10]);

//Create SVG elements
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
.			attr("height", h);

//Create circles
svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx", function(d) {
return xScale(d[0]);
	})
	.attr("cy", function(d) {
return yScale(d[1]);
	})
	.attr("r", function(d) {
		return aScale(d[1]);
	});
//Create Labeles
svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d) {
			return d[0] + "," + d[1];
			})
	.attr("x", function(d) {
			return xScale(d[0]);
			})
	.attr("y", function(d) {
			return yScale(d[1]);
			})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "purple");
        