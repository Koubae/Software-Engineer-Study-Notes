import * as basic from "./src/001_basic.js";
import * as vide_player from "./src/002_video_player.js";
import * as circle_moving from "./src/003_circle_moving.js";
import * as sun from "./src/004_sun.js";
import * as tweets from "./src/005_tweets.js";
import * as assignment6 from "./src/006_assignment.js";

import * as playground from "./src/playground.js";

//const Demo = basic;
let Demo = vide_player;
Demo = tweets;
Demo = assignment6;
Demo = playground;

function setup() {
  Demo.setup();

}

function draw() {
  Demo.draw();
}



// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //background(51);
}

let i = 0;
function mousePressed() {
  console.log("Mouse pressed", i);
  if (i % 2 === 0) {
    background(255, 0, 0);
    i = 0;
  } else {
    background(0, 0, 255);
    i = 2;
  }

}


window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
/* window.mousePressed = mousePressed; */


/**
 *  Makes changes and restores previous styles    
push();         // Save current styles
fill(255, 0, 0); // Change fill
ellipse(100, 100, 50); // This uses red fill
pop();          // Restore previous fill color
 */

