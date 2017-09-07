var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window.onload = function(){
	context.translate(canvas.width/2,canvas.height/2);
	context.fillStyle = "black";
	context.beginPath();
	context.moveTo(0,-300);
	context.lineTo(0,300);
	context.stroke();
	context.moveTo(300,0);
	context.lineTo(-300,0);
	context.stroke();
	context.closePath();
	context.fillStyle = "red";
	document.getElementById('drawLine').setAttribute('onclick', 'getCoordinates()');
	document.getElementById('generateLines').setAttribute('onclick', 'generateLines()');
	document.getElementById('generateBasicTriangles').setAttribute('onclick', 'generateBasicTriangles()');
}

function getCoordinates(){
	var x0 = parseInt(document.getElementById('xValue0').value, 10);
	var x1 = parseInt(document.getElementById('xValue1').value, 10);
	var y0 = parseInt(document.getElementById('yValue0').value, 10);
	var y1 = parseInt(document.getElementById('yValue1').value, 10);
	drawLine(x0,y0,x1,y1);
}

function generateLines(){
	var iterations = parseInt(document.getElementById('iterations').value, 10);
	for(var i = 0; i < iterations; i++){
		var x0 = Math.floor(Math.random() * (300 - -300) + -300);
		var y0 = Math.floor(Math.random() * (300 - -300) + -300);
		var x1 = Math.floor(Math.random() * (300 - -300) + -300);
		var y1 = Math.floor(Math.random() * (300 - -300) + -300);
		drawLine(x0,y0,x1,y1);
		//console.log("Line " + i + ": (" + x0 + "," + y0 + ") to (" + x1 + "," + y1 + ")");
	}
}

function drawLine(x0,y0,x1,y1){
	var deltaX = x1 - x0;
	var deltaY = y1 - y0;
	var loop;
	if(Math.abs(deltaX) > Math.abs(deltaY)){
		loop = Math.abs(deltaX);
	} else {
		loop = Math.abs(deltaY);
	}
	var xChange = deltaX / loop;
	var yChange = deltaY / loop;
	for(var i = 0; i < loop; i++){
		X = x0 + (xChange * i);
		Y = y0 + (yChange * i);
		context.beginPath();
		context.fillRect(X,Y,1,1);
		context.closePath();
	}
}

function generateBasicTriangles(){
	var t0 = performance.now();
	var iterations = parseInt(document.getElementById('iterationsTriangle').value, 10);
	for(var i = 0; i < iterations; i++){
		var x0 = Math.floor(Math.random() * (300 - -300) + -300);
		var y0 = Math.floor(Math.random() * (300 - -300) + -300);
		var x1 = Math.floor(Math.random() * (300 - -300) + -300);
		var y1 = Math.floor(Math.random() * (300 - -300) + -300);
		var x2 = Math.floor(Math.random() * (300 - -300) + -300);
		var y2 = Math.floor(Math.random() * (300 - -300) + -300);
		drawBasicTriangle(x0,y0,x1,y1,x2,y2);
		//console.log("("+x0+","+y0+")"+"("+x1+","+y1+")"+"("+x2+","+y2+")")
	}
	var t1 = performance.now();
	console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}

function drawBasicTriangle(x0,y0,x1,y1,x2,y2){
	context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
	drawLine(x0,y0,x1,y1);
	drawLine(x1,y1,x2,y2);
	drawLine(x0,y0,x2,y2);
}