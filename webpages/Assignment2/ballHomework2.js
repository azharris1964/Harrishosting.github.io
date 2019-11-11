/////////////////////////////////
//          CSMA101            //
//          Fall '19           //
//      Professor Theohar      //
//      Armontae Harris        //
//      (346) 269 - 5301       //
//        Ball Homework        //
/////////////////////////////////

var startX;
var startY;
var directionX;
var directionY;

var color;
var edge;
function setup() {
   let myCanvas = createCanvas(560,560);
    myCanvas.position(650, 150);
    myCanvas.parent('myContainer');
    color = map(startX, 0, width, 0, 255);
    background(0);
    //starting point
    startX = width/2;
    startY = height/2;
    
    //movement
    directionX = random(4);
    directionY = random(6);
    
}

function draw () {
       
    
    

    //starting point + movement
    startX = startX + directionX;
    startY = startY + directionY;
    
    if( startX > (width)) {
        
        directionX = -directionX
    }
    
    if( startX < (0)) {
        
        directionX = -directionX
    }
    if( startY < (0)) {
        
        directionY = -directionY
    }
    if( startY > (height)) {
        
        directionY = -directionY
    }
   
    edge = map(startX, 0, width, 0, 10, true);
    stroke(edge,random(255),0);
    fill(color, 0, 0);
    triangle(startX, startY, startX + 50, startY + 25, startX, startY +50);
    triangle(startY, startX, startY + 50, startX + 25, startY, startX +50);
    
}