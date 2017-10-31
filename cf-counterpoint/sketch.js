// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// A grammar object
var cfree;
var osc;
var c = 261.626;
var d = 293.665;
var e = 329.628;
var f = 349.228;
var g = 391.995;
var a = 440;
var b = 493.883;
var c5 = 523.251;

var attackLevel = .5;
var releaseLevel = 5;

var attackTime = 0.5
var decayTime = .2;
var susPercent = 0.8;
var releaseTime = 0.2;

var env;

function setup() {

	osc = new p5.Oscillator('triangle');
	env = new p5.Env();
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);

  

  // An empty one
  cfree = new ContextFree();

  // We can add rules manually
  cfree.addRule('P', ['FP', 'RP']);
  cfree.addRule('FP', [c, 'N', 'N', 'V']);
  cfree.addRule('RP', ['V', 'N', 'V' , 'R']);

  cfree.addRule('N', [e]);
  cfree.addRule('N', [g]);
  cfree.addRule('N', [c5]);
  cfree.addRule('N', [c]);
  cfree.addRule('V', [d]);
  cfree.addRule('V', [f]);
  cfree.addRule('V', [b]);
  cfree.addRule('R', [c]);
  cfree.addRule('R', [c5]);

  noCanvas();
  // A button to generate a new sentence
  var button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  
}

// Remove everything
function clearAll() {
  var elements = selectAll('.note');
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}


function generate() {
	clearAll();
  // Get an expansion starting with 'S'
  var expansion = cfree.getExpansion('P');
  var expansion2 = cfree.getExpansion2('P');

  for (var i = 0; i < expansion.length; i++) {
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);
  	osc.freq(expansion[i]);
  	osc.amp(env);
 	osc.start(i);
  	osc.stop(i+1);
  	env.play();
  	var line1 = createSpan(" ").class('note');
  	line1.position(i*120+60, (400-expansion[i])+350);
  }

  for (var j = 0; j < expansion2.length; j++) {
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);
  	osc.freq(expansion2[j]);
  	osc.amp(env);
 	osc.start(j);
  	osc.stop(j+1);
  	env.play();
  	var line2 = createSpan(" ").class('note')
  	line2.position(j*120+60, (400-expansion2[j])+350);
  }


 
}
