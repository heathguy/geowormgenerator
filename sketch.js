var shapeSize = 20;
var objPos = 0;

function setup() {
  createCanvas(800, 800);
	background(200);
	frameRate(1);
	
	objPos = 100;
	translate(objPos,height/2);
	fill(0,255,0);
	drawObj();
	fill(255,0,0);
	strokeWeight(4);
	point(0,0);
	fill(255);
	strokeWeight(1);
	
	//translate to next position
	//rotate
	//draw object
	for(var i = 0; i < 20; i++) {
		if(random(1) > .5 && objPos > 0) {
			translate(shapeSize+(shapeSize/3)-3,-shapeSize+(shapeSize/3));
			rotate(-PI/3);
			objPos += shapeSize+(shapeSize/3)-3;
		} else {
			translate(shapeSize+(shapeSize/3)-3,shapeSize-(shapeSize/3));
			rotate(PI/3);
			objPos += shapeSize+(shapeSize/3)-3;
		}

		drawObj();
		//fill(255,0,0);
		//strokeWeight(4);
		//point(0,0);
		//fill(255);
		//strokeWeight(1);
	
	}

// 	translate(shapeSize+(shapeSize/3)-7,-shapeSize+(shapeSize/3));

// 	rotate(-PI/3);
// 	drawObj();
// 	fill(255,0,0);
// 	strokeWeight(4);
// 	point(0,0);
// 	fill(255);
// 	strokeWeight(1);
	
	
// 	translate(shapeSize+(shapeSize/3)-7,shapeSize-(shapeSize/3));

// 	rotate(PI/3);
// 	drawObj();
// 	fill(255,0,0);
// 	strokeWeight(4);
// 	point(0,0);
// 	fill(255);
// 	strokeWeight(1);
	
	
}

function draw() {
// 	if(random(1) > .5) {
// 		translate(shapeSize+(shapeSize/3)-7,-shapeSize+(shapeSize/3));
// 		rotate(-PI/3);
// 	} else {
// 		translate(shapeSize+(shapeSize/3)-7,shapeSize-(shapeSize/3));
// 		rotate(PI/3);
// 	}
	
	//translate(shapeSize+(shapeSize/3)-7,-shapeSize+(shapeSize/3));
	//rotate(-PI/3);
	// drawObj();
	// fill(255,0,0);
	// strokeWeight(4);
	// point(0,0);
	// fill(255);
	// strokeWeight(1);
}

function drawObj() {
	rectMode(CENTER);
	rect(0,0,shapeSize,shapeSize);
  
	var pX1 = shapeSize/2;
	var pY1 = -shapeSize/2;
	
	//var pX2 = shapeSize/2 + (shapeSize * sin(degrees(22.5)));
	var pX2 = floor(sqrt( ((shapeSize)*(shapeSize)) - ((shapeSize/2)*(shapeSize/2)) ));
	pX2 += shapeSize/2;
	var pY2 = 0;
	
	var pX3 = shapeSize/2;
	var pY3 = shapeSize/2;
	
	triangle(pX1,pY1,pX2,pY2,pX3,pY3);
}
