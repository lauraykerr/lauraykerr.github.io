function Edge(firstNode, secondNode) {

	this.start = firstNode;
	this.end = secondNode;

	this.render = function() {
		stroke(0);
		line(this.start.x, this.start.y, this.end.x, this.end.y);
	}
}