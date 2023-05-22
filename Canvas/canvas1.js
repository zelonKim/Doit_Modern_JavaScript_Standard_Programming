const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d")

/* 
ctx.fillStyle = "rgb(200,0,0)";
ctx.strokeStyle = "black";
ctx.fillRect(10, 10, 50, 100);
ctx.strokeRect(10, 10, 200, 100)

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45)
*/

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 200);
ctx.stroke();

