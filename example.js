 var myData = [1,2,3,4,5,6,7,8,9,10]
	 d3.select("body")
	    .selectAll("p")
		.data(myData)
	 	.enter() // Dynamically create placeholders
	 	.append("p")
	 	.style('color', function(d) {
	 		if (d % 3 ===0){
	 			return "red"
	 		} else {
	 			return "blue"
	 		}
	 	})
	 	.text(function(d){ 
	 		return d;
	 	})