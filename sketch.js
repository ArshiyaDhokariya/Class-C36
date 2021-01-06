var database;
var playerCount ;
var form , player, game ;
var gameState = 0 ;




function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();


}

function draw(){
  background("white");
  
    drawSprites();
  
}

