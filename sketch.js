var tower





function preload(){
tower = loadImage("tower.png")
wallsImg = loadImage("wall.jpg")

}

function setup(){
createCanvas(500,500)
towerbkroung = createSprite(250,300)
//towerbkroung.addImage(tower)
towerbkroung.velocityY = 1
wall = createSprite(0,200,20,450)
//wall.addImage(wallsImg)
wall.scale = 0.2


}

function draw(){
  background("yellow")
  if(towerbkroung.y > 300){
    towerbkroung.y = 200
  }


 drawSprites()
}




