var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = "black";

window.onload = function(){
	document.getElementById('drawLine').setAttribute('onclick', 'drawLine()');
	
}

function drawLine(){
	context.beginPath();
	var x0 = parseInt(document.getElementById('xValue0').value, 10);
	var x1 = parseInt(document.getElementById('xValue1').value, 10);
	var y0 = parseInt(document.getElementById('yValue0').value, 10);
	var y1 = parseInt(document.getElementById('yValue1').value, 10);
	var deltaX = x1 - x0;
	var deltaY = y1 - y0;
	var m = deltaY / deltaX;
	console.log(m);
	var m2 = deltaX / deltaY;
	var looper;
	var change;
	if(deltaY > deltaX){
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