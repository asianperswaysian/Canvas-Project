var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "blue";
canvas.fillRect(00, 800, 10000, 200);

canvas.fillStyle = "brown";
canvas.fillRect(400, 500, 10, 300);


canvas.beginPath();
      canvas.arc(400, 765, 130, 0, Math.PI, false);
      canvas.closePath();
      canvas.lineWidth = 5;
      canvas.fillStyle = 'brown';
      canvas.fill();
      canvas.strokeStyle = '#550000';
      canvas.stroke();

canvas.beginPath();
     canvas.fillStyle = "black";
     canvas.moveTo(500, 565);
     canvas.lineTo(410,600);
     canvas.lineTo(410,500);
     canvas.fill();

     canvas.fillStyle = "blue";
     canvas.fillRect(300, 800, 10000, 200);

     canvas.fillStyle = "brown";
     canvas.fillRect(800, 500, 10, 300);


     canvas.beginPath();
           canvas.arc(800, 765, 130, 0, Math.PI, false);
           canvas.closePath();
           canvas.lineWidth = 5;
           canvas.fillStyle = 'brown';
           canvas.fill();
           canvas.strokeStyle = '#550000';
           canvas.stroke();

     canvas.beginPath();
          canvas.fillStyle = "black";
          canvas.moveTo(900, 565);
          canvas.lineTo(810,600);
          canvas.lineTo(810,500);
          canvas.fill();
