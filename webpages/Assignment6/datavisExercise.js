/////////////////////////////////
//          CSMA101            //
//          Fall '19           //
//      Professor Theohar      //
//      Armontae Harris        //
//      (346) 269 - 5301       //
//        Datavis Homework     //
/////////////////////////////////


var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var sz = [];

function preload(){
    
    colorTable = loadTable("Console.csv")
}


function setup(){
    
   let myCanvas = createCanvas(1200,1200);
    myCanvas.position(450, 250);
    myCanvas.parent('myContainer');
    colorMode(HSB, 360, 100, 100);
    background(0);
    noStroke();
    
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i, 0);
        hueVal[i] = colorTable.getNum(i, 1);
        myRating[i] = colorTable.getNum(i, 2);
        sz[i] = map(myRating[i], 1, 10, 10, 80);
    }
    
}

function draw(){
   
  fill(255)
    text(names[i], 200 * (i + 1), 1000);
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        fill(hueVal[i], 80, 80);
        triangle(myRating[i], myRating[i], myRating[i] * 50, myRating[i], myRating[i] * 25,  myRating[i] * 50);
        rect(myRating[i], myRating[i], myRating[i] * 50, myRating[i]*30);
        
        fill(hueVal[i],80,80);
        textSize(20);
        text(names[i], 200 * (i + 1), 1000);
    }
}