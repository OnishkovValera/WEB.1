canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
let width = canvas.width;
let height = canvas.height;
let color = "rgba(20, 20, 20, 0.3)"

context.font = "0.8rem mono";

context.fillText("y", width * 0.53, height * 0.025);
context.fillText("x", width * 0.975, height * 0.47);
context.fillText("R", width * 0.53, height * 0.152);
context.fillText("R/2", width * 0.53, height * 0.33);
context.fillText("-R/2", width * 0.53, height * 0.687);
context.fillText("-R", width * 0.53, height * 0.868);
context.fillText("R", width * 0.85, height * 0.47);
context.fillText("R/2", width * 0.653, height * 0.47);
context.fillText("-R/2", width * 0.281, height * 0.47);
context.fillText("-R", width * 0.118, height * 0.47);

// Ось Y
context.beginPath();
context.moveTo(width * 0.5,0);
context.lineTo(width * 0.5, height);
context.stroke();
// Ось X
context.beginPath();
context.moveTo(0, height * 0.5);
context.lineTo(width, height * 0.5);
context.stroke();
//-----------------------------------------
context.beginPath();
context.moveTo(width * 0.5, 0);
context.lineTo(width * 0.485, height * 0.04);
context.stroke();
context.beginPath();
context.lineTo(width * 0.5, 0);
context.lineTo(width * 0.515, height * 0.04);
context.stroke();
//-----------------------------------------
context.beginPath();
context.moveTo(width, height * 0.5);
context.lineTo(width * 0.96, height * 0.485);
context.stroke();
context.beginPath();
context.moveTo(width, height * 0.5);
context.lineTo(width * 0.96, height * 0.515);
context.stroke();
//-----------------------------------------
// Засечки
context.beginPath();
context.moveTo(width * 0.485, height * 0.14);
context.lineTo(width * 0.515, height * 0.14);
context.stroke();
context.beginPath();
context.moveTo(width * 0.485, height * 0.32);
context.lineTo(width * 0.515, height * 0.32);
context.stroke();
context.beginPath();
context.moveTo(width * 0.485, height * 0.68);
context.lineTo(width * 0.515, height * 0.68);
context.stroke();
context.beginPath();
context.moveTo(width * 0.485, height * 0.86);
context.lineTo(width * 0.515, height * 0.86);
context.stroke();
context.beginPath();
context.moveTo(width * 0.14,height * 0.485);
context.lineTo(width * 0.14, height * 0.515);
context.stroke();
context.beginPath();
context.moveTo(width * 0.32,height * 0.485);
context.lineTo(width * 0.32, height * 0.515);
context.stroke();
context.beginPath();
context.moveTo(width * 0.68,height * 0.485);
context.lineTo(width * 0.68, height * 0.515);
context.stroke();
context.beginPath();
context.moveTo(width * 0.86,height * 0.485);
context.lineTo(width * 0.86, height * 0.515);
context.stroke();

context.fillStyle = color;
context.strokeStyle = "rgba(20, 20, 20, 0.03)";
//-----------------------------------------
// четверть круга
context.beginPath();
context.arc(width * 0.5, height * 0.5, width * .36, Math.PI/2, Math.PI, false);
context.fillStyle = color;
context.stroke();
context.fill();
context.beginPath();

context.moveTo(width * .5, height * .5);
context.lineTo(width * .14, height * .5);
context.lineTo(width * .5, height * .86);
context.lineTo(width * .5, height * .5);
context.fillStyle = color;
context.stroke();
context.fill();
// 1 четверь
context.beginPath();
context.rect(width*0.5, height * 0.14,width * 0.18, height * 0.36 )
context.stroke();

context.moveTo(width * .5, height * .5);
context.lineTo(width * .86, height * .5);
context.lineTo(width * .5, height * .86);
context.lineTo(width * .5, height * .5);
context.fillStyle = color;
context.stroke();
context.fill();