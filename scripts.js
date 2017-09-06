var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = "black";

window.onload = function(){
	document.getElementById('drawLine').setAttribute('onclick', 'getCoordinates()');
	document.getElementById('generateLines').setAttribute('onclick', 'generateLines()');
}

function getCoordinates(){
	var x0 = parseInt(document.getElementById('xValue0').value, 10);
	var x1 = parseInt(document.getElementById('xValue1').value, 10);
	var y0 = parseInt(document.getElementById('yValue0').value, 10);
	var y1 = parseInt(document.getElementById('yValue1').value, 10);
	drawLine(x0,x1,y0,y1);
}

function generateLines(){
	var iterations = parseInt(document.getElementById('iterations').value, 10);
	console.log(iterations);
	for(var i = 0; i < iterations; i++){
		var x0 = Math.floor(Math.random() * 400);
		var y0 = Math.floor(Math.random() * 400);
		var x1 = Math.floor(Math.random() * 400);
		var y1 = Math.floor(Math.random() * 400);
		console.log("(" + x0 + "," + y0 + ")(" + x1 + "," + y1 + ")");
		drawLine(x0,x1,y0,y1);
	}
}

function drawLine(x0,x1,y0,y1){
	context.beginPath();
	var deltaX = x1 - x0;
	var deltaY = y1 - y0;
	var m = deltaY / deltaX;
	console.log(m);
	var m2 = deltaX / deltaY;
	var looper;
	var change;
	if(Math.abs(deltaY) > Math.abs(deltaX)){
		looper = Math.abs(deltaY);
		if(deltaY < 0){
			change = -1;
		} else if(deltaY > 0){
			change  = 1;
		} else {
			change = 0;
		}
		for(var i = 0; i <= looper - 1; i++){
			var X = (m2 * i) + x0;
			var Y = y0 + (change * i);
			Y = Math.trunc(Y);
			context.fillRect(X,Y,1,1);
			console.log("Delta Y: " + X + "," + Y);
		}
	} else {
		looper = Math.abs(deltaX);
		if(deltaX < 0){
			change = -1;
		} else if(deltaX > 0){
			change = 1;
		} else {
			change = 0;
		}
		if(deltaY < 0){
			m = m * -1;
		}
		for(var i = 0; i <= looper - 1; i++){
			var X = x0 + (change * i);
			var Y = (m * i) + y0;
			Y = Math.trunc(Y);
			context.fillRect(X,Y,1,1);
			console.log("Delta X: " + X + "," + Y);
		}
	}
	context.closePath();
}