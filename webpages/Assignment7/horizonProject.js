var bright;
var sunX;
var sunY;
var speedX;
var speedY;
var x = 1;
var y = 1;

function setup(){
   let myCanvas = createCanvas(800, 800);
   // myCanvas.position(650, 150);
    myCanvas.parent('myContainer');
    colorMode(HSB, 360, 100, 100);
    
    
    
    Sun = new Sun(100, 600, 2, 2);
}

function draw(){
    var sky = map(Sun.y, 0, height/2, 0, 100);
    background(203, 70, 100 - sky);
    
    fill(50, 100, 100);
    Sun.draw();
    Sun.rise();
    Sun.beginsetting();
    Sun.birds();
    
    noStroke();
    fill(203, 50, 100);
    rect(0, 700, 1600, 1000);
}

function Sun(sunX, sunY, speedX, speedY){
    this.x = sunX;
    this.y  = sunY;
    this.spX = speedX;
    this.spY = speedY;
    
    this.draw = function(){
        
        circle(this.x, this.y, 50, 50);

    }
    
    this.rise = function(){
      if(this.x >= 50){
            this.x += this.spX;
            this.y -= this.spY;    
       }   
    }
    
    this.beginsetting = function(){
        if(this.y < 0 || this.y > height +15)
            this.spY = -this.spY;
    }
        
    this.set = function(){
        if(sun.x >= width/2){
            this.x += this.spX;
            this.y += this.spY
        }
    }

    this.birds = function(){
         
for(var i = 550; i < width; i += 60){
    for(var j = 200; j < 400; j+=20){
        

    noFill();
    stroke('black');
    arc(random(i),j,19,10, PI, 0);
    arc(random(i + 40) ,j,19,10, PI, 0);  
}
    }
    }
}