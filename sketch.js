var ball,ballimg,paddle,paddleimg, gameState;
function preload() {
  paddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
}


function setup() {
  createCanvas(400, 400);
  paddle = createSprite(380,200,10,50);
  ball = createSprite(200,200,20,20);
  paddle.addImage("paddle",paddleimg);
  ball.addImage("ball",ballimg);
  gameState = "serve";
}


function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle,randomVelocity);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y+20;
  }
  
   if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
  
  if (keyDown("space") && gameState == "serve") {
    ball.velocityX = 9;
    gameState = "play";
  }

  if(ball.x>400 && gameState === "play"){
  gameState = "over";
  }
    
  
  if (gameState === "over") {
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }

  if (keyDown("r")) {
    gameState = "serve";
    ball.x=200;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
    paddle.x = 380;
    paddle.y =200;
  }
  
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-4,-9);
}

