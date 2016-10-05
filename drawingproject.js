var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "blue";
canvas.fillRect(00, 800, 10000, 200);

canvas.fillStyle = "brown";
canvas.fillRect(400, 400, 10, 300);


canvas.beginPath();
      canvas.arc(400, 765, 130, 0, Math.PI, false);
      canvas.closePath();
      canvas.lineWidth = 5;
      canvas.fillStyle = 'brown';
      canvas.fill();
      canvas.strokeStyle = '#550000';
      canvas.stroke();
