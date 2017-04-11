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

function preload() {
  data = loadJSON('six_degrees.json');
}

function setup() {
  noCanvas();
  // Create the graph
  graph = new Graph();
  // A separate lookup table for actors
  musicians = {};

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
  artistlist = createSelect();
  artistlist.parent('artistlist');
  var allartists = Object.keys(musicians);
  // Add all the actors
  for (var i = 0; i < allartists.length; i++) {
    artistlist.option(allartists[i]);
  }
  // Set up an event
  artistlist.changed(findjohnson);
}

function findjohnson() {
  // Clear everyone from having been searched
  graph.clear();
  // Start and end
  var start = musicians[artistlist.value()];
  var end = musicians['Robert Johnson'];
  graph.setStart(start);
  graph.setEnd(end);
  // Run the search!
  bfs();
}

function bfs() {
  // Create a queue ad path
  var queue = [];
  var path = [];

  // Get started
  queue.push(graph.start);

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
    if (i != 0) {
      result += "<br/>" + ' ↓ ' + "<br/>";
    }
    console.log(path[i].label);
  }
  
  var resultText = document.createP(result);
  resultText.className = "results";
  


}