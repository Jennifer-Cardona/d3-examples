//USING YOUR DATA-Chapter 5
var dataset = [ 5, 10, 15, 20, 25 ];
d3.select("body") //GIVE THE METHOD A CSS SELECTOR
.data(dataset) //COUNT AND PARSES OUR DATA VALUES
.enter() ///To create new, data-bound elements, you must use enter().
.append("p") //CREATES A NEW DOM ELEMENT AND APPEDNS IT OT THE END OF WAHTERVER SELECTION ITS ACTING ON
.text(function(d) {  // we will write a lot of anonymous funtion when using d3 
    return "I can count up to " + d;  
})   

/* What are anonymous funtions?
functions that does not have an specific name 
when you chain methofs after data() you can create anonymous functions that accepts d as an input
.text(), attr(), and many other D3 methods can take a function as an argument */

//BOUND TEXT
//like attr()and style(), which allow us to set HTML attributes and CSS properties on selections,
 //.style("color", "red");  
 //OR 
 .style("color", function(d){
    if (d > 15){  //Threshold of 15 \
        return "blue";
        } else { 
            return "black";
    }
 }); 

//
d3.select('body')
    .append('h1')
    .text('Chapter 5')
    .style("color", "red")
    .attr('class', 'heading'); 