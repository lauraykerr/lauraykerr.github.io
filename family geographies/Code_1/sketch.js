var canvas;

var title;
var gen = 1;
var family = [];
var family2 = [];
var links = [];
var links2 = [];
var o = 0;
var timeSlide;
var resetButton;
var endButton;
var dateRange;
var description;
var nameOn = false;
var names = [];
var circleFill = 140;
var origin = [];
var origin2 = [];
var family1 = true;
var nextFam;

//spacing variables: in future, create horizontal spacing automatically according to how many in each array
var genStep = 85; 
var firstGen = 125;
var secondGen = 210;
var thirdGen = 295;
var fourthGen = 380;
var area1 = 20;
var area2 = 140;
var area3 = 260;
var count1 = 60;
var count2 = 40;
var count3 = 30;
var count4 = 24;
var count5 = 20;
var count6 = 17.15;
var count7 = 15;
var count8 = 13.33;
var count9 = 12;
var count10 = 10.91;
var count11 = 10;
var count12 = 9.23;
var count14 = 8;
var count15 = 7.5;

function setup() { 
	canvas = createCanvas(400,400);
	canvas.parent("tree1");

	title = createElement("h2","1. Descendents of Sura Akerman");
	title.parent("title");
	timeSlide = createSlider(1,5,1);
	timeSlide.parent("timeSlider");
	resetButton = createButton("RESET");
	resetButton.parent("resetButton");
	resetButton.mousePressed(reset);
	endButton = createButton("COMPLETE");
	endButton.parent("endButton");
	endButton.mousePressed(complete);
	dateRange = createP("c. 1843, Poland");
	dateRange.parent("dateText");
	description = createP("");
	description.parent("descrip");
	nextFam = createButton("NEXT TREE &raquo;");
	nextFam.parent("nextButton");
	nextFam.mousePressed(nextFamily);
	
	// tree nodes
	// NEXT STEPS: move to json file
	
	//first family 
	family.push(new Member(area2+1*count1,area2+1*count1,1,0,"Sura"));
	family.push(new Member(area2+1*count1,area2+1*count1,1,0, "Sura"));

	family.push(new Member(area2+1*count9,area2+1*count8,2,0,"Josek"));
	family.push(new Member(area2+2*count9,area2+2*count8,2,0,"Golda"));
	family.push(new Member(area2+3*count9,area2+3*count8,2,0,"Rechel"));
	family.push(new Member(area2+4*count9,area2+4*count8,2,0,"Marja"));
	family.push(new Member(area2+5*count9,area2+5*count8,2,0,"Ghila"));
	family.push(new Member(area2+6*count9,area2+6*count8,2,0,"Jenta"));
	family.push(new Member(area2+7*count9,area2+7*count8,2,0,"Abram"));
	family.push(new Member(area2+8*count9,area2+8*count8,2,0,"Chaja"));
	family.push(new Member(area2+9*count9,area3+1*count1,2,0,"Izrael"));

	family.push(new Member(area2+1*count12,area1+1*count9,3,2,"Moszek"));
	family.push(new Member(area2+2*count12,area1+2*count9,3,2,"Rachmil"));
	family.push(new Member(area2+3*count12,area2+1*count10,3,2,"Wulf"));
	family.push(new Member(area2+4*count12,area1+3*count9,3,2,"Chana"));
	family.push(new Member(area2+5*count12,area1+4*count9,3,2,"Jankel"));
	family.push(new Member(area2+6*count12,area1+5*count9,3,2,"Szmul"));
	family.push(new Member(area2+7*count12,area1+6*count9,3,7,"Chaja"));
	family.push(new Member(area2+8*count12,area1+7*count9,3,7,"Golda"));
	family.push(new Member(area2+9*count12,area1+8*count9,3,9,"Bajla"));
	family.push(new Member(area2+10*count12,area2+2*count3,3,9,"Margulisa"));
	family.push(new Member(area2+11*count12,area2+3*count3,3,9,"Chaim"));
	family.push(new Member(area2+12*count12,area1+9*count9,3,9,"Fajga"));
	family.push(new Member(area3+1*count6,area3+1*count6,3,10,"Jose"));
	family.push(new Member(area3+2*count6,area3+2*count6,3,10,"Jacabo"));
	family.push(new Member(area3+3*count6,area3+3*count6,3,10,"Felisa"));
	family.push(new Member(area3+4*count6,area3+4*count6,3,10,"Adolfo"));
	family.push(new Member(area3+5*count6,area3+5*count6,3,10,"Rosa"));
	family.push(new Member(area3+6*count6,area3+6*count6,3,10,"Sara"));

	family.push(new Member(area1+1*count15,area1+1*count14,4,11,"Joe"));
	family.push(new Member(area1+1*count15,area1+1*count14,4,17,"Joe"));
	family.push(new Member(area1+2*count15,area1+2*count14,4,11,"Hyman"));
	family.push(new Member(area1+2*count15,area1+2*count14,4,17,"Hyman"));
	family.push(new Member(area1+3*count15,area1+3*count14,4,11,"Yetta"));
	family.push(new Member(area1+3*count15,area1+3*count14,4,17,"Yetta"));
	family.push(new Member(area1+4*count15,area1+4*count14,4,11,"William"));
	family.push(new Member(area1+4*count15,area1+4*count14,4,22,"William"));
	family.push(new Member(area1+5*count15,area1+5*count14,4,12,"Bella"));
	family.push(new Member(area1+6*count15,area1+6*count14,4,12,"Rose"));
	family.push(new Member(area1+7*count15,area1+7*count14,4,12,"Joseph"));
	family.push(new Member(area1+8*count15,area1+8*count14,4,15,"Ruth"));
	family.push(new Member(area1+9*count15,area1+9*count14,4,15,"Shirley"));
	family.push(new Member(area1+10*count15,area1+10*count14,4,16,"Joe"));
	family.push(new Member(area1+11*count15,area1+11*count14,4,16,"Larry"));
	family.push(new Member(area1+12*count15,area1+12*count14,4,16,"Gloria"));
	family.push(new Member(area1+13*count15,area1+13*count14,4,18,"Joseph"));
	family.push(new Member(area1+14*count15,area1+14*count14,4,19,"Ruth"));
	family.push(new Member(area1+15*count15,area3+1*count8,4,19,"Mildren"));
	family.push(new Member(area2+1*count4,area2+1*count4,4,20,"Rachmil"));
	family.push(new Member(area2+2*count4,area2+2*count4,4,20,"Sura"));
	family.push(new Member(area2+3*count4,area2+3*count4,4,21,"Samuel"));
	family.push(new Member(area2+4*count4,area2+4*count4,4,21,"Mordechaj"));
	family.push(new Member(area3+1*count7,area3+2*count8,4,23,"Diego"));
	family.push(new Member(area3+2*count7,area3+3*count8,4,23,"Anna"));
	family.push(new Member(area3+3*count7,area3+4*count8,4,24,"Ricardo"));
	family.push(new Member(area3+4*count7,area3+5*count8,4,24,"Diana"));
	family.push(new Member(area3+5*count7,area3+6*count8,4,25,"Ze'ev"));
	family.push(new Member(area3+6*count7,area3+7*count8,4,25,"Sylvia"));
	family.push(new Member(area3+7*count7,area3+8*count8,4,25,"Eli"));

	//second family
	family2.push(new Member(area2+1*count1,area2+1*count1,1,0,"Ruchla"));
	family2.push(new Member(area2+1*count1,area2+1*count1,1,0,"Ruchla"));

	family2.push(new Member(area2+1*count3,area2+1*count1,2,0,"Marja"));
	family2.push(new Member(area2+2*count3,area1+1*count2,2,0,"Chaja"));
	family2.push(new Member(area2+3*count3,area1+2*count2,2,0,"Malka"));

	family2.push(new Member(area2+1*count6,area2+1*count3,3,2,"Sonja"));
	family2.push(new Member(area2+2*count6,area2+2*count3,3,2,"Chanja"));
	family2.push(new Member(area2+3*count6,area1+1*count5,3,3,"Samuel"));
	family2.push(new Member(area2+4*count6,area1+2*count5,3,3,"Rose"));
	family2.push(new Member(area1+1*count2,area1+3*count5,3,3,"Annie"));
	family2.push(new Member(area1+2*count2,area1+4*count5,3,3,"Hyman"));
	family2.push(new Member(area2+5*count6,area2+3*count3,3,4,"Majlich"));
	family2.push(new Member(area2+6*count6,area1+5*count5,3,4,"Ruchla"));

	family2.push(new Member(area1+1*count10,area1+1*count10,4,8,"Gerald"));
	family2.push(new Member(area1+2*count10,area1+2*count10,4,8,"Lorraine"));
	family2.push(new Member(area1+3*count10,area1+3*count10,4,9,"John"));
	family2.push(new Member(area1+4*count10,area1+4*count10,4,9,"Howard"));
	family2.push(new Member(area1+5*count10,area1+5*count10,4,9,"Joel"));
	family2.push(new Member(area1+6*count10,area1+6*count10,4,10,"John"));
	family2.push(new Member(area1+7*count10,area1+7*count10,4,10,"Neal"));
	family2.push(new Member(area1+8*count10,area1+8*count10,4,10,"Lynn"));
	family2.push(new Member(area1+9*count10,area1+9*count10,4,12,"Harvey"));
	family2.push(new Member(area1+10*count10,area1+10*count10,4,12,"Melvin"));


	//links array
	for (k = 0; k < family.length; k++) {
		links.push(new Link((family[k].parent),k));
	}

	for (m = 0; m < family.length; m++) {
		origin.push(family[m].x);
	}

	for (k = 0; k < family2.length; k++) {
		links2.push(new Link2((family2[k].parent),k));
	}

	for (m = 0; m < family2.length; m++) {
		origin2.push(family2[m].x);
	}

	
} 

function draw() {
	
	background(240);

	// generation value from slider
	gen = timeSlide.value();

	// display first family
if (family1 == true) {
	for (i=0; i<family.length; i++) {
		if (gen >= family[i].y) {
		family[i].newDisplay();
		family[i].update();
		}
	}

	for (j=0; j<links.length; j++) {
		if (gen >= family[links[j].child].y) {
		links[j].nameDisplay();
		links[j].show();
		links[j].grow();
		links[j].shift();
		}
	}
}

//display second family
else {
	for (i=0; i<family2.length; i++) {
		if (gen >= family2[i].y) {
		family2[i].newDisplay();
		family2[i].update();
		}
	}
	for (j=0; j<links2.length; j++) {
		if (gen >= family2[links[j].child].y) {
		links2[j].nameDisplay();
		links2[j].show();
		links2[j].grow();
		links2[j].shift();
		}
	}
}

	// display descriptions and graph background
	mapX();
	dateUpdate();
	descriptionText();
}


function mapX() {
	stroke(150);
	line(20,20,width-20,20);
	for (i=0; i<4;i++) {
		line(i*120+20,20,i*120+20,25);
	}
}

// reset family tree
function reset() {
	timeSlide.value(1);
	background(240);

	for (m=0; m<family.length; m++) {
		family[m].x = origin[m];
	}

	for (k=0; k<links.length; k++) {
		if (family[links[k].parent].y < gen) {
		links[k].y = family[links[k].parent].y*genStep;
	}
}

	for (m=0; m<family2.length; m++) {
		family2[m].x = origin2[m];
	}

	for (k=0; k<links.length; k++) {
		if (family2[links2[k].parent].y < gen) {
		links2[k].y = family2[links2[k].parent].y*genStep;
	}
}
}

// display next family
function nextFamily() {
	family1 = !family1;
	timeSlide.value(1);
	if (family1) {
		title.html("1. Descendents of Sura Akerman");
		nextFam.html("NEXT TREE &raquo;");
	}
	else {
		title.html("2. Descendents of Ruchla Akerman");
		nextFam.html("&laquo; GO BACK");
	}
}

function complete() {
	timeSlide.value(5);
}

// family member node class
function Member(x,x2,y,parent,name) {	
	this.x = x;
	this.y = y;
	this.x2 = x2;
	this.parent = parent;
	this.name = name; 
	this.o = o;

	//moves left or right on gen + 1
	this.update = function() {
		if (gen > this.y) {
			if (this.x < this.x2) {
				noStroke();
				this.x = this.x+2;
			}
			if (this.x > this.x2) {
				noStroke();
				this.x = this.x-2;
			}
		}
	}

	this.newDisplay = function() {
		if (gen >= this.y+2) {
		noStroke();
		fill(150,this.o);
		this.x = this.x2
		ellipse(this.x,this.y*genStep,10,10);
		}
	}
}

// family member link class 
function Link(parent,child) {
	this.parent = parent;
	this.child = child;
	this.x = family[this.parent].x;
	this.y = family[this.parent].y*genStep;
	this.show = function() {
		stroke(255,140,120);
		line(family[this.parent].x,family[this.parent].y*genStep,this.x,this.y);
		fill(circleFill);
		noStroke();
		ellipse(this.x,this.y,10,10);
	}
	this.grow = function() {
		if (this.y <= family[this.child].y*genStep) {
		this.y++;
		this.x = family[this.child].x;
		}
	}

	this.shift = function() {
		if (family[this.child].y < gen) {
			this.x = family[this.child].x;
		}
	}
	this.nameDisplay = function() {

		if (dist(mouseX,mouseY,this.x,this.y) < 5) {
			nameOn = true;
			if (nameOn) {
			fill(40);
			textFont('Cormorant Garamond',16);
			textAlign(CENTER);
			text(family[this.child].name,mouseX,mouseY-10);
			nameOn = !nameOn;
			}
		}
		else {	
			nameOn = false;
		}
	}
}

// second family links --> next step: combine
function Link2(parent,child) {
	this.parent = parent;
	this.child = child;
	this.x = family2[this.parent].x;
	this.y = family2[this.parent].y*genStep;
	this.show = function() {
		stroke(255,140,120);
		line(family2[this.parent].x,family2[this.parent].y*genStep,this.x,this.y);
		fill(circleFill);
		noStroke();
		ellipse(this.x,this.y,10,10);
	}
	this.grow = function() {
		if (this.y <= family2[this.child].y*genStep) {
		this.y++;
		this.x = family2[this.child].x;
		}
	}

	this.shift = function() {
		if (family[this.child].y < gen) {
			this.x = family2[this.child].x;
		}
	}
	this.nameDisplay = function() {

		if (dist(mouseX,mouseY,this.x,this.y) < 5) {
			nameOn = true;
			if (nameOn) {
			fill(40);
			textFont('Yrsa',15);
			textAlign(CENTER);
			text(family2[this.child].name,mouseX,mouseY-10);
			nameOn = !nameOn;
			}
		}
		else {	
			nameOn = false;
		}
	}
}

function dateUpdate() {
	if (gen == 1) {
		dateRange.html("Mid-19th Century, Poland");
	}
	else if (gen == 2) {
		dateRange.html("1860-1890");
	}
	else if (gen == 3) {
		dateRange.html("1890-1920");
	}
	else if (gen == 4) {
		dateRange.html("1920-1950")
	}
	else if (gen == 5) {
		dateRange.html("1940-1970");
	}
}

function descriptionText() {
	if (gen == 1) {
		description.html("<p>This family tree portrays the geographical movement of a family from the mid-19th to the mid-20th century. Each node represents a descendent, appearing in the location of birth then shifting according to any geographical relocations. This project is the beginning of an exploration of the effects of historical events on Jewish family tree patterns. Note:</p><p>&#8226; Move slider to adjust time frame</p><p>&#8226; Segments along x-axis represent: North America (including the United States and Canada), Europe, and Other (including South America and Israel)</p><p>&#8226; Hover over nodes to see names</p>");  
 
	}
	else if (gen == 2) {
		description.html("<p>The second generation was born in Radom, Poland or in nearby towns, just as the generations before it had been. By the end of the 19th century, Jewish people comprised about a third of the town's population.</p>");
	}
	else if (gen == 3) {
		description.html("<p>As the 20th century progressed, families began to spread out. Following the immigration patterns of other members of the community, some settled in Canada, the United States, or South America. Most of the third generation was born in Radom, Poland or nearby, though many knew their family's town for just a few years before traveling across oceans. Others were born further afield, in Toronto or Buenos Aires.");
	}
	else if (gen == 4) {
		description.html("<p>The fourth generation marks a time of massive and desperate relocation. As the seeds of the Holocaust took root across Europe, many left for North America. A large population from Radom settled in Toronto and Detroit (where they are now buried in the Radomer Cemetery). No one in the third and fourth generations who stayed in Poland survived the Holocaust. They perished either in Radom, which became a Nazi-occupied ghetto from 1941 to 1942, or at the Treblinka extermination camp.</p>");
	}
	else if (gen == 5) {
		description.html("A few people relocated to the newly formed State of Israel, but the majority remained in their newfound homes, taking stock, grieving, and counting blessings.");
	}
}

