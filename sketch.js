var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car1,car2,car3,car4,cars;

var allplayers;
var distance = 0;      

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 20 );
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(playerCount === 4) {
  game.update();
}
if(gameState === 1) {
  clear();
  game.play();
}
}
