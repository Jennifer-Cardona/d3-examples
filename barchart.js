var dataset = [70,60,40,120,180,23,28,15,30,66,];
var svgWidth = 500; //pixels 
var svgHeight = 300;
var barPadding = 5;

var barWidth = (svgHeight/ dataset.length);  

var svg = d3.select('body') // 
    .append("svg")
    .attr('width', svgWidth) 
    .attr('height', svgHeight); 

svg.selectAll('rect') //we generate rcts adn add them to svg  
    .data(dataset)
    .enter() //will take the dataset 
    //it would do all this method for all the elements in the dataset 
    .append("rect") 
    .attr("y", function(d){ //
        return svgHeight -d   //height minus data value 
    })
    .attr("height", function(d){  //to put the"bottom" of the bar on the botom of the SVG 
        return d; 
     }) 
    .attr("width",barWidth - barPadding) //
    .attr("transform", function(d,i){   //
        var translate = [barWidth * i, 0]; // we want to translate one after another one. h  
        return "translate("+ translate +")"; // return  the value we calcutlate before 

     })
     //COLORS
     .attr("fill", function(d) {
        return "rgb(1, 1, " + Math.round(d * 10) + ")"; //darker colors are lower values 
     }); 
     //Creating Labels 
     svg.selectAll(".text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d){ //we get the value of the dataset 
            return d; 
        })
        .attr("x", function(d,i){  // 
            return barWidth * i;
        })
        .attr("y", function(d){
            return svgHeight -d-2; // a little higher from the rect
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "white")
        //.attr("text-anchor", "middle"); (Note: Fix Later) 