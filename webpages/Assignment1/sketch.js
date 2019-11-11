var x = 0;
var y = 0;

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;


function setup (){
    
    let myCanvas = createCanvas(560,560);
    myCanvas.position(650, 150);
    myCanvas.parent('myContainer');
    background(0);
    
}

function draw() {
        fill(random(200),0,0);
        x1 = x1 + 50;
        
    x = x + 30;
       
   
    if(x > 980) {
      
        x=0;
        y=y+30;

    }
    
    
        triangle(x, y, x + 50, y + 25,  x, y + 50)
}