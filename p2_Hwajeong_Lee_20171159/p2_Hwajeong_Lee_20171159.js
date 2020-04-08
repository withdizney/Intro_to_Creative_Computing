// One line, One song
// written by. Hwajeong Lee / 20171159 / 2020
// Intro to Creative Computing / Project #2 / Sogang Univ.

// Sound file objects
let track1;
let track2;
let track3;

// Load the sound files
function preload() {
  soundFormats('mp3', 'ogg');
  track1 = loadSound('track1');
  track2 = loadSound('track2');
  track3 = loadSound('track3');
}

// Make a canvas for drawing
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(248,187,197);
  rect(10,10,807,43);
  textSize(30);
  fill(255);
  text('Try one line drawing if you wanna enjoy the whole song!', 20, 40);
  textSize(15);
  fill(248,187,197);
  text('* Press [Enter] and wait a second to restart *', 15, 75);
}

function draw() {  
  stroke(0);
 
  // The user can draw with mouse clicking  
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    
  // you can reset the canvas with [Enter] button
  if(keyCode==ENTER){
    createCanvas(windowWidth, windowHeight);  noStroke();
    fill(248,187,197);
    rect(10,10,805,43);
    textSize(30);
    fill(255);
    text('Try one line drawing if you wanna enjoy the whole song!', 20, 40);
    textSize(15);
    fill(248,187,197);
    text('* Press [Enter] and wait a second to restart *', 15, 75);
  } 
}
}

// When the user is clicking mouse(=drawing), one of the songs is randomly played
function mousePressed(){
  randomTrack=[track1, track2, track3]
  let num = random(0,2.9);
  num = int(num);
  trackNum = randomTrack[num];
  trackNum.play();
}

// When the user releases mouse click(=quit drawing), the song would stop
function mouseReleased(){
  trackNum.stop();
}
