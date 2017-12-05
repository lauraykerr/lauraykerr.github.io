
var sorryData;
var apologies = [];
var apologyText = [];
var paragraphs = [];
var allApologies;
var stopList = ["and", "to", "there", "been", "some", "up","people", "the", "who", "of", "that", "in", "have", "for", "it", "this", "is", "not", "with", "was", "be", "all", "on", "am", "ve", "about", "what", "as", "at", "from", "or", "do", "an", "are", "had", "by", "has", "so", "can", "were", "those", "re", "any", "which", "out", "than", "did", "then", "don", "also", "through", "into", "thing", "whom", "put", "while"];
var keys = [];
var concordance;
var lines = [];
var words = [];
var sentences = [];
var falling = false;
var mouseCount = 0;
var displayCount = 90; 
var displayTerm = " ";
var matchCount = 0;
var textPos;
var paragraphs = [];
var sentenceStart;
var alignment = [LEFT, CENTER, RIGHT];



function preload() {
	sorryData = loadJSON("apologies.json", getText);

}


function setup() {
	var canvas = createCanvas(1200, 740);
	canvas.parent("content");
	noStroke();

	
	//sorryData = loadJSON("apologies.json", getText);
	for (var i = 0; i < keys.length; i++) {
		lines[i] = new Line(i);
		words[i] = new Word(i);
	}
	console.log(words[1].word);
}	

function draw() {
	background(255);

	displaySentences();
	textPos++;
	for (var i = 0; i < displayCount; i++) {
		lines[i].display();
		lines[i].grow();
	}
	for (var j = 0; j < displayCount; j++) {
		words[j].display();
		words[j].update();
	}
	for (var k = 0; k < 3; k++) {
		lines[k].col = (0);
		words[k].col = (0);
	}
	
}


function mousePressed() {
	falling = true;
	sentenceStart = -1000;
	if (mouseCount > 0) {
		displaySentences();
	}
	for (var i = 0; i < displayCount; i++) {
		if (mouseY < lines[i].yPos + 3 && mouseY > lines[i].yPos - 3 && mouseX < words[i].xPos + 20) {
			lines[i].highlight();
			words[i].highlight();
			displayTerm = words[i].word;
		}
		else {
			lines[i].col = 80;
			lines[i].height = 6;
			words[i].col = 0;
			words[i].size = 10;
		}
	}
	mouseCount++;
}


function Line(index) {
	this.xPos = 0;
	this.yPos = index*8+5;
	this.width = 10;
	this.height = 6;
	this.col = 80;

	this.display = function() {
		fill(this.col);
		noStroke();
		rect(this.xPos, this.yPos, this.width, this.height);
	}
	this.grow = function() {
		//this.col = color(0, 0, 89);
		if (falling == true) {
		if (this.width < concordance.getCount(keys[index])*6) {
			this.width = this.width + 5;
		}
		}
	}
	this.highlight = function() {
		this.col = color(181, 0, 0);
		this.height = 8;
	}
}


function Word(index) {
	this.col = 60;
	this.xPos = 12;
	this.yPos = index*8+11;
	this.word = keys[index];
	this.size = 10;

	this.display = function() {
		noStroke();
		textAlign(LEFT);
		fill(this.col);
		textSize(this.size);
		text(this.word, this.xPos, this.yPos);
	}

	this.update = function() {

		if (falling == true) {
			if (this.xPos < concordance.getCount(keys[index])*6 + 5) {
				this.xPos = this.xPos + 5;
			}
		// if (this.yPos <= height-concordance.getCount(keys[index])*3 - 8) {
		// 	this.yPos = this.yPos+random(1,6)+(this.yPos/120);
		// }
		}
	}
	this.highlight = function() {
		this.col = color(181, 0, 0);
		this.size = 14;
	}
}

function ApologiesExcerpt(displayTerm) {
	this.displayTerm = displayTerm;
	this.xPos = width/2;
	this.yPos = yPos;
	this.index = 

	this.displayExcerpt = function() {
		var display = text()
	}
}


function getText(data) {
	apologies = data.apologies;
	for (var i = 0; i < apologies.length; i++) {
		apologyText.push(apologies[i].text);
	}

	sentences = apologyText.join(" ").toLowerCase().split(".");
	
	allApologies = apologyText.join(" ").toLowerCase().split(/\W+/);

	for (i = 0; i < allApologies.length; i++) {
		for (j = 0; j < stopList.length; j++) {
			var match = allApologies.indexOf(stopList[j]);
			 if (match != -1) {
				allApologies.splice(match, 1);
				match = allApologies.indexOf(stopList[j]);
			}
		}
	}
	process(allApologies);	
}



function displaySentences() {
	matchCount = 0;
	// for (var i = 0; i < paragraphs.length; i++) {
	// 	paragraphs[i].remove();
	// }
	for (var i = 0; i < sentences.length; i++) {	
		if (sentences[i].indexOf(displayTerm) != -1 && displayTerm != " ") {
			matchCount++;
			//var p = 
			fill(200);
			textAlign(LEFT);
			text(sentences[i], sentenceStart, 15*matchCount+ 15);
			//.parent('paras').addClass('fallingP');
			//paragraphs.push(p);
		}
	}
	if (matchCount == 0) {
		text(" ");
	}
	
	sentenceStart = sentenceStart + 2;
}



function process(txt) {
  
  concordance = new Concordance();
  concordance.process(txt);
  concordance.sortByCount();
  
  
  keys = concordance.getKeys();


  for (var i = 0; i < keys.length; i++) {
  	
  	fill(0);
    //console.log(keys[i] + ': ' + concordance.getCount(keys[i]));
  }
}