//modball exercisse

var Pac1;
var Pac2;
var Pac3;
var Pac4;
var Dots;
var x = 1;
var y = 1;

function setup(){
    let myCanvas = createCanvas(1200,1200);
    myCanvas.position(350, 150);
    myCanvas.parent('myContainer');
    colorMode(HSB, 360, 100, 100);
    
    
    Pac1 = new Pac(600, 600, 2, 2, 10);
    Pac2 = new Pac(700, 700, 2, 2, 190);
    Pac3 = new Pac(500, 500, 2, 2, 100);
    Pac4 = new Pac(400, 400, 2, 2, 52);
    Dots = new Dots(500, 500);
    
}

function draw(){
    background(0);

    
    Pac1.upPac();
    Pac2.upPac();
    Pac3.upPac();
    Pac4.upPac();
    
    Pac1.rightPac();
    Pac2.rightPac();
    Pac3.rightPac();
    Pac4.rightPac();
    
    
    Pac1.downPac();
    Pac2.downPac();
    Pac3.downPac();
    Pac4.downPac();
   
    Pac1.leftPac();
    Pac2.leftPac();
    Pac4.leftPac();
    
    
   Pac1.bouncePac();
   Pac2.bouncePac();
   Pac3.bouncePac();
   Pac4.bouncePac();
    
   Pac2.openPac();
   Pac3.randomPac();   
   Pac1.eatPac();

    
}


function Pac(pacX, pacY, speedX, speedY, huePac){
   
    //properties of Pac
    this.x = pacX;
    this.y = pacY;
    this.spX = speedX;
    this.spY = speedY;
    this.col = huePac;
    
    this.eatPac = function() {  
        if((this.y & 11) == 2){
            fill(this.col, 90, 60);
        circle(this.x, this.y, 50, 50);
        }
        else{
            fill(this.col, 90, 60);
            arc(this.x, this.y, 100, 100, 2, 1);
        }
    }
    
    
    this.openPac = function() {  
        if((this.x & 11) == 2){
            fill(this.col, 90, 60);
        circle(this.x, this.y, 50, 50);
        }
        else{
            fill(this.col, 90, 60);
            arc(this.x, this.y, 100, 100, 1/2, -1/2);
        }
    }
    
    this.randomPac = function() {
        if(keyCode === LEFT_ARROW){
        this.x -= this.spX;
         noStroke();
    fill(random(200,360), 90, 60);
    arc(this.x, this.y, 100, 100, -5/2, 5/2);   
        }
    }
    //move Pac
    this.downPac = function(){
       if(keyCode === DOWN_ARROW){
        this.y += this.spY;
            noStroke();
    fill(this.col, 90, 60);
    arc(this.x, this.y, 100, 100, 2, 1);   
       }
    } 
    
    this.leftPac = function(){
        if(keyCode === LEFT_ARROW){
       this.x -= this.spX;
         noStroke();
    fill(this.col, 90, 60);
    arc(this.x, this.y, 100, 100, -5/2, 5/2);
        }
    } 
    
    this.upPac = function(){
         if(keyCode === UP_ARROW){
       this.y -= this.spY;
            noStroke();
    fill(this.col, 90, 60);
    arc(this.x, this.y, 100, 100, 420, 130);
         }
    } 
    
    this.rightPac = function(){
         if(keyCode === RIGHT_ARROW){
       this.x += this.spX;
            noStroke();
    fill(this.col, 90, 60);
    arc(this.x, this.y, 100, 100, 1/2, -1/2);
         }
    }
    // detect collisions
    this.bouncePac = function() {
        if(this.x < 0 || this.x > width)
            this.spX = -this.spX;
        if(this.y < 0 || this.y > height)
            this.spY = -this.spY;
    }
    
    
    
    
    
}

function Dots(dotsX, dotsY){
    this.x = dotsX;
    this.y = dotsY;
    
    this.dots = function(){
    for (let i = 0; i <= height; i += 500){
        fill(50,100,100);
        rect(i, i-1000, 20, 20);
        
    }       
    for (let i = 0; i <= height; i += 500){
        fill(50,100,100);
        rect(i, i-500, 20, 20);
        
    }       
    for (let i = 0; i <= height; i += 500){
        fill(50,100,100);
        rect(i, i, 20, 20);
        
    }       
        for (let i = 0; i <= height; i += 500){
        fill(50,100,100);
        rect(i, i+500, 20, 20);
            
    }       
        for (let i = 0; i <= height; i += 500){
        fill(50,100,100);
        rect(i, i+1000, 20, 20);
            
    }       
        
}  
}

    

    