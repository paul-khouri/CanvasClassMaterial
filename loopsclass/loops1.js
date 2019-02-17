console.log("loops js is called");


// drawCircle x,y,r, fillC, strokeC, lw, fill(boolean), stroke(boolean)


function drawGrid(x,y,s){
    for(j = 0; j<7 ; j++){
        for(var i = 0 ; i<7 ; i++){
            drawRectangle(x+i*s/7,y+j*s/7, s/7,s/7,colArray[3], colArray[4],1, false, true);
        }
    }
}

//drawGrid(400, 100, 140);
//drawGrid(400, 100, 49);
//drawGrid(400, 100, 280);

function drawGridCentre(x,y,s,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot*Math.PI/180);
    drawCircle(0,0,20, colArray[0], colArray[0], 2, false, true);
    for(j = 0; j<7 ; j++){
        for(var i = 0 ; i<7 ; i++){
            drawRectangle(0-s/2+i*s/7,0-s/2+j*s/7, s/7,s/7,colArray[3], colArray[4],1, false, true);
        }
    }
    ctx.restore();
}

drawGridCentre(300,300, 280, 30);

for(k =0 ; k<360; k+=20){
    console.log(k);
    drawGridCentre(300,300, 280, k);


}

