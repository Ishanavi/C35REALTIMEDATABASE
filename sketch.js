var ball;
var database,position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    var locationNode = database.ref("ball/position");
    locationNode.on("value",readop,showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeop(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeop(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeop(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeop(0,+1);
    }
    drawSprites();
}

function writeop(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
    
}

function readop(data)
{
  position = data.val();
  ball.x = position.x;
  ball.y = position.y; 
}

function showError()
{
   console.log(error);
}