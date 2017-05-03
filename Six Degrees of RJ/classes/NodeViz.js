function NodeViz(x,y,name, height, radius) {
	this.pos = createVector(0,0);
	this.tpos = createVector(x,y);
	var edges = [];
	this.name = name;
	this.textHeight = height;
	this.radius = radius;
	this.color;
	//this.color = ();

	this.update = function() {
		this.pos.lerp(this.tpos, 0.1);
	}

	this.render = function() {
		push();
			translate(this.tpos.x, this.tpos.y);
			fill(226, 115, 78);
			noStroke();
			ellipse(0, 0, this.radius, this.radius);
			fill(0);
			textAlign(CENTER);
			text(this.name, 0, this.textHeight);
		pop();
	}

}