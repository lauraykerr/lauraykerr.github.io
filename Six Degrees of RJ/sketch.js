// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// The data
var data;

// The graph
var graph;
// A lookup table for actors
// (redundant, the graph could handle this)
var musicians;
// Dropdown menu for actors
var artistlist;
var userInput;
var resultText;
var degreeText;
var allArtists;
var aboutLink;

var degrees;

var allNodes = [];
var allEdges = [];

var executeGraph = true;

function preload() {
  data = loadJSON('songs.json');
}

function setup() {
  var canvas = createCanvas(800, 400);
  // Create the graph
  graph = new Graph();
  // A separate lookup table for actors
  musicians = {};

  degrees = " ";

  // For all movies
  var songs = data.songs;
  for (var i = 0; i < songs.length; i++) {
    // Title and castlist
    var song = songs[i].title;
    var artists = songs[i].artists;
    // Add the movie to the graph
    var songNode = graph.addNode(song);
    // Go through all the cast list
    for (var j = 0; j < artists.length; j++) {
      var name = artists[j];
      var musicianNode;
      // Does the actor exist already?
      if (musicians[name]) {
        musicianNode = musicians[name];
      // If not add a new node
      } else {
        musicianNode = graph.addNode(name);
        musicians[name] = musicianNode;
      }
      // Connect movie and actor
      songNode.connect(musicianNode);
    }
  }

  // Create dropdown
  //artistlist = createSelect();
  artistlist = createInput();
  artistlist.parent('artistlist');
  artistlist.class('awesomplete');
  artistlist.attribute('list', 'myList');
  button = createButton('submit');
  button.parent('artistlist');
  button.mousePressed(findjohnson);
  resultText = createElement('p', '');
  resultText.parent('results');
  aboutLink = select("#about");
  aboutLink.mousePressed(showAbout);
  // aboutLink = document.getElementById("about");
  // aboutLink.addEventListener("mousedown", showAbout);
  
  allartists = Object.keys(musicians);

  for (i = 0; i < allartists.length; i++) {
    createElement('option', allartists[i]).parent('myList');
  }
}

function draw() {
  background(255);
  textStyle(NORMAL);
  textFont("Open Sans Condensed");
  textSize(18);
  fill(0);
  for (j = 0; j < allNodes.length; j++) {
   if (allEdges[j] != undefined) {
    allEdges[j].render();
  }
  }
  for (i = 0; i < allNodes.length; i++) {
    allNodes[i].render();
    allNodes[i].update();
  }

  textSize(32);
  textStyle(BOLD);
  fill(51,51,51);
  text(degrees, width/2 - 70, height-100);
}

function findjohnson() {
  // Clear everyone from having been searched
  graph.clear();
  userInput = artistlist.value();
  // Start and end

  var start = musicians[userInput];
  var end = musicians['Robert Johnson'];
  graph.setStart(start);
  graph.setEnd(end);

  
  for (var i = 0; i < allartists.length; i++) {
    if (allartists.indexOf(userInput) == -1) {
      executeGraph = false;
    }
    else {
      executeGraph = true;
    }
  }
  // Run the search!
  bfs();
}

function bfs() {
  // Create a queue ad path
  var queue = [];
  var path = [];

  // Get started
  queue.push(graph.start);

  
if (executeGraph) {
  while (queue.length > 0) {
    var node = queue.shift();
    // Are we done?
    if (node == graph.end) {
      // Figure out the path
      path.push(node);
      var next = node.parent;
      while (next) {
        path.push(next);
        next = next.parent;
      }
      break;
    } else {
      // Check all neighbors
      var next = node.edges;
      for (var i = 0; i < next.length; i++) {
        var neighbor = next[i];
        // Any neighbor not already searched add to queue
        if (!neighbor.searched) {
          queue.push(neighbor);
          // Updat the parent
          neighbor.parent = node;
        }
      }
      // Mark node as searched
      node.searched = true;
    }
  }
  console.log('-------finished-----')
  var result = '';
  for (var i = path.length-1; i >= 0; i--) {
    result += path[i].label;
    // if (i != 0) {
      //result += "<br/>" + ' ↓ ' + "<br/>";
      var yPosition;
      if (i % 2 == 1) {
        allNodes[i] = new NodeViz((width/path.length)*i + width/(path.length*2), 40, path[i].label, -15, 12);
      } 
      else {
        allNodes[i] = new NodeViz((width/path.length)*i + width/(path.length*2), 160, path[i].label, 35, 25);
      }
      var degreeNum = (allNodes.length - 1)/2;
      degrees = degreeNum + " degrees";
    }
    for (var i = 0; i < allNodes.length; i++) {
      if (i > 0) {
      allEdges[i] = new Edge(allNodes[i-1].tpos, allNodes[i].tpos);
      }
    }
    resultText.html(" ");
  }

  else {
    console.log('-------better luck next time-----');
    for (j = 0; j < allNodes.length; j++) {
      allNodes.splice(j);
    }

    var tryAgain = "Yikes! I can't seem to find that name. Are you sure it's spelled correctly (keep in mind that this function is case-sensitive)? Don't worry, more artists will be added soon.";
    resultText.html(tryAgain);
  }

}

function showAbout() {
  resultText.html(" ");
  var about = "Robert Johnson was the King of the Delta Blues who, according to a popular legend, sold his soul to the devil to learn how to play guitar. Soon this section will describe him more."
  resultText.html(about);
}

