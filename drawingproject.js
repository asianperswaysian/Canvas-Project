var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//water
canvas.fillStyle = "blue";
canvas.fillRect(00, 800, 10000, 200);

//sun
canvas.beginPath();
canvas.arc(700, 75, 70, 0, 2*Math.PI);
canvas.fillStyle = "yellow";
canvas.stroke();


//first boat
canvas.beginPath();
      canvas.arc(400, 765, 130, 0, Math.PI, false);
      canvas.closePath();
      canvas.lineWidth = 5;
      canvas.fillStyle = 'brown';
      canvas.fill();
      canvas.strokeStyle = '#550000';
      canvas.stroke();

      canvas.fillStyle = "brown";
      canvas.fillRect(400, 500, 10, 300);

canvas.beginPath();
     canvas.fillStyle = "white";
     canvas.moveTo(500, 565);
     canvas.lineTo(410,600);
     canvas.lineTo(410,500);
     canvas.fill();

//second boat
     canvas.fillStyle = "#421D28";
     canvas.fillRect(800, 500, 10, 300);


     canvas.beginPath();
           canvas.arc(800, 765, 130, 0, Math.PI, false);
           canvas.closePath();
           canvas.lineWidth = 5;
           canvas.fillStyle = '#421D28';
           canvas.fill();
           canvas.strokeStyle = '#550000';
           canvas.stroke();

           canvas.beginPath();
                canvas.fillStyle = "";
                canvas.moveTo(700, 565);
                canvas.lineTo(810,600);
                canvas.lineTo(810,500);
                canvas.fill();


//third boat
          canvas.beginPath()
                canvas.arc(1000, 765, 130, 0, Math.PI, false);
                canvas.closePath();
                canvas.lineWidth = 5;
                canvas.fillStyle = '#421D28';
                canvas.fill();
                canvas.strokeStyle = '#550000';
                canvas.stroke();

                canvas.fillStyle = "#421D28";
                canvas.fillRect(1000, 500, 10, 300);

                canvas.beginPath();
                     canvas.fillStyle = "black";
                     canvas.moveTo(900, 565);
                     canvas.lineTo(1010,600);
                     canvas.lineTo(1010,500);
                     canvas.fill();

                     //fourth boat
                     canvas.beginPath();
                           canvas.arc(200, 765, 130, 0, Math.PI, false);
                           canvas.closePath();
                           canvas.lineWidth = 5;
                           canvas.fillStyle = 'brown';
                           canvas.fill();
                           canvas.strokeStyle = '#550000';
                           canvas.stroke();

                           canvas.fillStyle = "brown";
                           canvas.fillRect(200, 500, 10, 300);

                     canvas.beginPath();
                          canvas.fillStyle = "white";
                          canvas.moveTo(300, 565);
                          canvas.lineTo(210,600);
                          canvas.lineTo(210,500);
                          canvas.fill();

//birds

                canvas.beginPath();
                canvas.fillStyle = 'white';
                canvas.moveTo(200,100);
                canvas.lineTo(200,50);
                canvas.lineTo(300,50);
                canvas.fill();

                canvas.beginPath();
                canvas.fillStyle = 'white';
                canvas.moveTo(300,120);
                canvas.lineTo(400,70);
                canvas.lineTo(300,70);
                canvas.fill();

                canvas.beginPath();
                canvas.fillStyle = 'white';
                canvas.moveTo(100,70);
                canvas.lineTo(200,30);
                canvas.lineTo(100,30);
                canvas.fill();

                canvas.beginPath();
                canvas.fillStyle = 'white';
                canvas.moveTo(200,100);
                canvas.lineTo(300,50);
                canvas.lineTo(200,50);
                canvas.fill();
