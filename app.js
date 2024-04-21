
//Load the data
d3.csv("Potatoes Production.csv", function (data) {
     console.log(data);
      });
// How to handle columns
var rowCoverter = function(d){
    return{
        "Country": d.Country, //No conversion 
        "Value": parseFloat(d.Value),   //Convertion
        "Year":parseFloat(d.Year),   // Convertion
    };   
}

d3.csv("Potatoes Production.csv",rowCoverter, function(data){
    console.log(data); 
});
//
//if the network connection fails, or the file‐
//name is misspelled, or for some reason an error occurs on the web server end, the
//callback function will still be executed. 
//
var dataset;
d3.csv("Potatoes Production.csv", function(error, data){
    if(error){
        console.log(error); 
    }
    else{
    console.log(data)
    dataset = data; 
    generateVis(); 
    hideLoadigMSG(); 
    }

});
//Make your selection 