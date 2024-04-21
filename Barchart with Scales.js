//Width and height
			var w = 600;
			var h = 250;
			
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

			var xScale = d3.scaleBand() //here we declare a new varuble callled xScale 
							.domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) //if domain is not specified it defaults to the empty domain
							.rangeRound([0, w]) //each band wil be 30 "wide"
							.paddingInner(0.09);  //padding must be lest than or equal to 1

			var yScale = d3.scaleLinear()
							.domain([0, d3.max(dataset)])
							.range([0, h]);
			
			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);
        //Create bars
			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return xScale(i); // ----> set x values
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d);
			   })
			   .attr("width", xScale.bandwidth()) //---> we don't need barPadding anymore beucase the band scale calculated it for us. 
			   .attr("height", function(d) {
			   		return yScale(d);
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + Math.round(d * 10) + ")";
			   });

			//Create Labels    
               svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return xScale(i) + xScale.bandwidth() / 2;
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");

//INTERACTION VIA EVENT LISTENERS 
//On click, update with new data			
d3.select("p")
.on("click", function() {

	//New values for dataset
	dataset = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
				5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];

	//Update all rects
	svg.selectAll("rect")
	   .data(dataset)
	   .transition() // d3 introduces the element of time
	   .delay(function(d,i){
		return i*100; //This will delay each bar by a certain amount (in ms)
	   })
	   .duration(5000) // how long is this goign ot take!
	   .ease(d3.easeLinear)
	   .attr("y", function(d) {
			   return h - yScale(d);
	   })
	   .attr("height", function(d) {
			   return yScale(d);
	   })
	   .attr("fill", function(d) {
			return "rgb(0, 0, " + Math.round(d * 10) + ")";
	   });

	   //Update all labels
	   svg.selectAll("text")
	   .data(dataset)
	   .text(function(d) {
			   return d;
	   })
	   .attr("x", function(d, i) {
			   return xScale(i) + xScale.bandwidth() / 2;
	   })
	   .attr("y", function(d) {
			   return h - yScale(d) + 14;
	   });
					   
});

