var lines;
var textComplete;
var sentences = [];
var searchTerm;
var matches = [];
var newText;
var chapterCount = 0;

function preload() {
	lines = loadStrings("odyssey.txt");
}


function setup() {
	noCanvas();
	textComplete = join(lines);
	sentences = splitTokens(textComplete, ".");
	var search = select("#go");
	search.mousePressed(searchWord);
	var clear = select("#clear");
	clear.mousePressed(clearText);
	
}


function searchWord() {
	chapterCount += 1;
	var inputBox = select("#inputBox");
	searchTerm = inputBox.value();
	matches.splice(0,matches.length);
	for (i = 0; i < sentences.length; i++) {
		if (sentences[i].indexOf(searchTerm) != -1) {
			matches.push(sentences[i] + ".");
		}
	}
	newText = join(matches);
	sectionHeader = createP(chapterCount + "." + " " + searchTerm);
	sectionHeader.class("sectionHeader");
	createP(newText);
	if (matches.length == 0) {
		createP("Then Odysseus shouted to no one in particular," + " " + "'" + searchTerm + "!!!'")
	}
	tableContents();
}

function tableContents () {
	println("yo whatup");
	var addChapter = createP(chapterCount + "." + " " + searchTerm);
	addChapter.parent("#tContents"); 
}


function clearText() {
	if (chapterCount > 0) {
	chapterCount = 0;
	var allP = selectAll("p");
		for (i = 0; i < allP.length; i++) {
			allP[i].remove();
		}	
	}
}
