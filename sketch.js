var player, obstacle1, obstacle2, obstacle3, obstacle4, track, trackSprite, obstacleGroup;





function preload() {
  player = loadImage("player.png")
  obstacle1 = loadImage("car1.png")
  obstacle2 = loadImage("car2.png")
  obstacle3 = loadImage("puddle.png")
  obstacle4 = loadImage("rock.png")
  track = loadImage("track.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  trackSprite = createSprite(displayWidth / 2, displayHeight / 8 - 50);
  trackSprite.addImage(track)
  trackSprite.scale = 2.2
  playerSprite = createSprite(displayWidth/2,displayHeight/1.5)
  playerSprite.addImage(player)
  playerSprite.scale=0.5
  //scale puddle and rock
  //change depth
  obstacleGroup = createGroup()
  obstacleGroup.scale=0.5

}

function draw() {
  background(0);
  if (keyDown(UP_ARROW)) {
    trackSprite.y = trackSprite.y + 10
    obstacles();
  }
  if (trackSprite.y > displayHeight) {
    trackSprite.y = displayHeight / 8
}

if(keyWentUp(UP_ARROW)){
obstacleGroup.setVelocityYEach(0)
}
if (keyDown(LEFT_ARROW)){
playerSprite.velocityX=-4
}

if (keyDown(RIGHT_ARROW)){
  playerSprite.velocityX=4
  }
  if (keyWentUp(LEFT_ARROW)){
    playerSprite.velocityX=0
    }

    if (keyWentUp(RIGHT_ARROW)){
      playerSprite.velocityX=0
      }

if(obstacleGroup.isTouching(playerSprite)){
playerSprite.visible=false
}
playerSprite.collide(obstacleGroup)





  drawSprites();
}



function obstacles() {
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(random(50, displayWidth - 50), 0)
    obstacle.velocityY = 4
    var rand = Math.round(random(1, 4))
    switch (rand) {
      case 1: obstacle.addImage(obstacle1)
        break;
      case 2: obstacle.addImage(obstacle2)
        break;
      case 3: obstacle.addImage(obstacle3)
        break;
      case 4: obstacle.addImage(obstacle4)
        break;
      default: break;
      obstacle.depth=500;
        obstacle.lifetime = 300;
        obstaclesGroup.add(obstacle)

    }



  }



}