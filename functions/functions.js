console.log(" functions js file has been called");

 // Set up canvas

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]

// ---------------functions

// drawCircle x,y,r, fillC, strokeC, lw, fill(boolean), stroke(boolean)
function drawCircle(x,y,r, fillC, strokeC, lw, fill, stroke ){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();

    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }

}
// drawCircle x,y,r, fillC, strokeC, lw, fill(boolean), stroke(boolean)
drawCircle(200,500, 50, colArray[0], colArray[4], 6, true, false);
drawCircle(400,500, 50, colArray[0], colArray[4], 6, true, true);
drawCircle(600,500, 50, colArray[0], colArray[4], 6, false, true);