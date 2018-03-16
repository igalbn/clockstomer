
// Clockstomer by Igal Bronshtein
// Images of plates,from online collection of Rijksmuseum

  var canvasWidth;
  var canvasHeight;
//images
  var imgBackgrond;
  var backgroundColor;

  var clock_X;
  var clock_Y;
  var clockTextSize;
  var stringFullTime;

//dots
  var imgDot;
  var dots_X;
  var dots_Y;
  var bottomDot_X, bottomDot_Y;
  var dotDiameter;
//numbers images
  var imgPlate_00;
  var imgPlate_01;
  var imgPlate_02;
  var imgPlate_03;
  var imgPlate_04;
  var imgPlate_05;
  var imgPlate_06;
  var imgPlate_07;
  var imgPlate_08;
  var imgPlate_09;
// nambers
  var hoursFirstDigit;
  var hoursFirstDigit_X, hoursFirstDigit_Y;

  var hoursSecondDigit;
  var hoursSecondDigit_X, hoursSecondDigit_Y;

  var minutesFirstDigit;
  var minutesFirstDigit_X, minutesFirstDigit_Y;

  var minutesSecondDigit;
  var minutesSecondDigit_X, minutesSecondDigit_Y;

  var numbersImagesWidth;
  var numbersImagesHeight;

function preload()
{
// images
   imgDot = loadImage("data/images/dots/dot_01.png");

   imgPlate_00  = loadImage("data/images/plates/plate_00.png");
   imgPlate_01  = loadImage("data/images/plates/plate_01.png");
   imgPlate_02  = loadImage("data/images/plates/plate_02.png");
   imgPlate_03  = loadImage("data/images/plates/plate_03.png");
   imgPlate_04  = loadImage("data/images/plates/plate_04.png");
   imgPlate_05  = loadImage("data/images/plates/plate_05.png");
   imgPlate_06  = loadImage("data/images/plates/plate_06.png");
   imgPlate_07  = loadImage("data/images/plates/plate_07.png");
   imgPlate_08  = loadImage("data/images/plates/plate_08.png");
   imgPlate_09  = loadImage("data/images/plates/plate_09.png");

   canvasWidth = 1280;
   canvasHeight = 720;
//background
   backgroundColor = color(40,11,11);
// dots
   dotDiameter = canvasWidth * 0.1;
   dots_X = canvasWidth / float(2) - dotDiameter / float(2);
   dots_Y = canvasHeight * 0.1;
   bottomDot_X = dots_X;
   bottomDot_Y = canvasHeight - dots_Y - dotDiameter;

// clock
   numbersImagesWidth = canvasWidth * 0.254;
   numbersImagesHeight = numbersImagesWidth;

   clock_X = 410;
   clock_Y = 190;
   clockTextSize = 150;
   stringFullTime = hour() + ":" + nf(minute(),2);

   hoursFirstDigit = 0;
   hoursFirstDigit_X = canvasWidth * 0.1;
   hoursFirstDigit_Y = canvasHeight * 0.02;

   hoursSecondDigit = 0;
   hoursSecondDigit_X = hoursFirstDigit_X;
   hoursSecondDigit_Y = canvasHeight - hoursFirstDigit_Y - numbersImagesHeight;

   minutesFirstDigit = 0;
   minutesFirstDigit_X = canvasWidth - hoursFirstDigit_X - numbersImagesWidth;
   minutesFirstDigit_Y = hoursFirstDigit_Y;

   hoursSecondDigit = 0;
   minutesSecondDigit_X = minutesFirstDigit_X;
   minutesSecondDigit_Y = hoursSecondDigit_Y;

}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

}

function draw() {
  drawBackground();
  drawClock();
}

function drawBackground()
{
//  image(imgBackgrond,0,0,width,height);
  background(backgroundColor);
}

function drawClock()
{
// dots
  image(imgDot, dots_X,dots_Y,dotDiameter,dotDiameter);
  image(imgDot, bottomDot_X,bottomDot_Y, dotDiameter,dotDiameter);
// digits (plates)

// assign values to individual clock digits
  hoursFirstDigit = hour();
  hoursFirstDigit = (hoursFirstDigit - hoursFirstDigit % 10) / 10;

  hoursSecondDigit = hour() % 10;

  minutesFirstDigit = minute();
  minutesFirstDigit = (minutesFirstDigit - minutesFirstDigit % 10) / 10;

  minutesSecondDigit = minute() % 10;

drawNumbersImages(hoursFirstDigit, hoursFirstDigit_X, hoursFirstDigit_Y);
drawNumbersImages(hoursSecondDigit, hoursSecondDigit_X, hoursSecondDigit_Y);
drawNumbersImages(minutesFirstDigit, minutesFirstDigit_X, minutesFirstDigit_Y);
drawNumbersImages(minutesSecondDigit, minutesSecondDigit_X, minutesSecondDigit_Y);

}

function drawNumbersImages(clockDigit, digit_X, digit_Y)
{

  switch (clockDigit)
  {
    case 0: image(imgPlate_00, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
        break;
    case 1: image(imgPlate_01, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 2: image(imgPlate_02, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 3: image(imgPlate_03, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 4: image(imgPlate_04, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 5: image(imgPlate_05, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 6: image(imgPlate_06, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 7: image(imgPlate_07, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 8: image(imgPlate_08, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    case 9: image(imgPlate_09, digit_X,digit_Y, numbersImagesWidth,numbersImagesHeight);
       break;
    default: console.log("error");
      break;
  }

} // close, drawNumbersImages()

/*
// full screen
function mousePressed() {

    var fs = fullscreen();
    fullscreen(!fs);

  }

  */
