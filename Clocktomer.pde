//when all the clock in the text command.
//It look unatural, when parameter below 10.
//So in this code every digit of clock, is separated.

color grey = #999999;

int firstDigit;  //left digit
int secondDigit;  //right digit

int currentNumber;

int numbersTextSize = 48;

int clock_X = 90;
int clock_Y = 120;

int distanceBetweenDigits = 70; // distance between hours minutes and seconds
void setup()
{
 size(800,600);
 
}

void draw()
{
  background(grey);
  
  textSize(numbersTextSize);

  for (int i = 0; i < 3; i++)
  {
    switch (i)
    {
     case 0: //seconds
             currentNumber = hour();
          break;
     case 1: //minutes
             currentNumber = minute();
          break;
     case 2: // hours
             currentNumber = second(); 
          break;
     default:
             break;         
    } //case
     
     // separate left and right digit.
     //For make clock look more natural: show zero when number below 10.
     secondDigit = currentNumber % 10;
     firstDigit = (currentNumber - secondDigit) / 10;
     
     //show clock on screen
      text(firstDigit + "" + secondDigit, clock_X + distanceBetweenDigits * i,clock_Y);  
  } //if

 
//  
 
  //exit clock
  if (key == 'q') { exit(); }
}
