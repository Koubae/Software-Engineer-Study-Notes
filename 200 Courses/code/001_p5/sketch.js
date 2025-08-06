import * as basic from "./src/001_basic.js";
import * as vide_player from "./src/002_video_player.js";
import * as circle_moving from "./src/003_circle_moving.js";
import * as sun from "./src/004_sun.js";
import * as tweets from "./src/005_tweets.js";

//const Demo = basic;
let Demo = vide_player;
Demo = tweets;

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



window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;


/**
 *  Makes changes and restores previous styles    
push();         // Save current styles
fill(255, 0, 0); // Change fill
ellipse(100, 100, 50); // This uses red fill
pop();          // Restore previous fill color
 */

