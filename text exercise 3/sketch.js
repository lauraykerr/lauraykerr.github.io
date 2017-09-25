var query;
var hexCode;
var userInput;
var url = "http://www.colourlovers.com/api/colors/top?format=json&keywords=";



function setup() {	
	
	userInput = select("#userQuery");
	
	
}

function draw() {
	userInput.style("color","#"+hexCode);
}

function keyPressed() {
	query = userInput.value();
	loadJSON(url+query, gotData);

  	function gotData(data) {
    	hexCode = data[0].hex;
 		console.log(hexCode);
  	}

}

