var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// AA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; // C41//AA
var cars = [];
var carm1 = [];
var carm2 = [];
var blastImage;
var car1smokedImg, car1smokedblackImg,  car1fireImg;   
var car2smokedImg, car2smokedblackImg,  car2fireImg;                      //C42// AA

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  lifeImage = loadImage("assets/life.png");
  obstacle1Image = loadImage("assets/obstacle1.png"); // C41//AA
  obstacle2Image = loadImage("assets/obstacle2.png"); // C41//AA
  blastImage = loadImage("assets/blast.png"); //C42 //AA
  //car1
  car1smokedImg = loadImage("assets/car1smokeed.png");
  car1smokedblackImg = loadImage("assets/car1smokeedblack.png");
  car1fireImg = loadImage("assets/car1fire.png");
  //car2
  car2smokedImg = loadImage("assets/car2smokeed.png");
  car2smokedblackImg = loadImage("assets/car2smokeedblack.png");
  car2fireImg = loadImage("assets/car2fire.png");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
