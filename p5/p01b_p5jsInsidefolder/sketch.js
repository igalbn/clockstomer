// clock with use of Rijksmuseum online collection.
var imgBackgrond;

var clock_X;
var clock_Y;
var clockTextSize;
var stringFullTime;
function preload()
{
// images
  imgBackgrond = loadImage("data/images/backgrounds/background_01.png");
// clock
   clock_X = 410;
   clock_Y = 190;
   clockTextSize = 150;
   stringFullTime = hour() + ":" + nf(minute(),2);
}

function setup() {
  createCanvas(1280, 720);
  background(222);
}

function draw() {
  drawBackground();
  drawClock();
}

function drawBackground()
{
  image(imgBackgrond,0,0,width,height);
}

function drawClock()
{
  textSize(clockTextSize);
  text(stringFullTime,clock_X,clock_Y);
}
