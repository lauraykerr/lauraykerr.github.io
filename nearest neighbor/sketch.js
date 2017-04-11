var s;
var scl = 3;
var x;
var y;
var noteNumber = 40;
var note;
var speedSlide;

var cmajor = {
  'C': 60,
  'D': 62,
  'E': 64,
  'F': 65,
  'G': 67,
  'A': 69,
  'B': 71,
}

var notes = ['C', 'D', 'E', 'F', 'G', 'A'];


var training = [];

// What is k
// This example will work by definition with a k of 1
var k = 1;

// All the training data
var data;

var osc;

var radio;



function setup() {
  createCanvas(600, 600);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  osc.amp(0);

  radio = createRadio();
  radio.option('classification');
  radio.value('classification');

  var playpause = createButton('pause');
  playpause.mousePressed(function() {
      s.xspeed = 0;
      s.yspeed = 0;
      osc.amp(0, 0.1);
    });

  speedSlide = createSlider(1,10,3);
  var directions = createP("Arrow keys move player // Space bar shuffles notes // Slider controls speed of player");  
  s = new Player;
  for (var i = 0; i < noteNumber; i++) {
    training.push(new Note);
  }
}


function draw() {
  background(0);

  var x = s.x;
  var y = s.y;
  s.update();
  s.show();

  scl = speedSlide.value();
  

  for (var i = 0; i < training.length; i++) {
    training[i].display();
    training[i].move();
  }

  // Nearest Neighbor Classification!
  if (radio.value() == 'classification') {

    // Simple KNN algorithm with K = 1 for classification
    note = null;
    var recordD = Infinity;
    for (var i = 0; i < training.length; i++) {
      var point = training[i];
      // Euclidean distance to this neighbor
      var d = dist(x, y, point.x, point.y);
      if (d < recordD) {
        note = point.note;
        recordD = d;
      }
    }

    var midi = cmajor[note];
    var freq = translateMIDI(midi);
    osc.freq(freq);

  } 

  // Now draw all the training data to see how it looks
  for (var i = 0; i < training.length; i++) {
    var point = training[i];
    stroke(0);
    fill(255);
    ellipse(point.x, point.y, 24, 24);
    noStroke();
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(point.note, point.x, point.y + 6);
  }

}

function translateMIDI(note) {
  return pow(2, ((note - 69) / 12.0)) * 440;
}

function keyPressed() {

  osc.amp(0.5, 0.1);

  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  }
  else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  }
  else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }
  else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  }
  if (keyCode === 32) {
    for (var i = 0; i < training.length; i++) {
    training[i].x = random(width);
    training[i].y = random(40, height);
    }
  }
 }

function Player() {
  this.x = 10;
  this.y = 10;
  this.xspeed = 0;
  this.yspeed = 0;

  this.update = function() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width-scl);

    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill(90, 180, 200);
    ellipse(this.x, this.y, 20, 20);
  }

  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}

function Note() {
  this.note = notes[floor(random(notes.length))];
  this.x = random(width);
  this.y = random(40, height);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(this.note, this.x, this.y + 6);
  }
}

function noteCommand() {
  
  // var noteText = note; 
  // textSize(40);
  // text(noteText, width/2, 40);
  
}