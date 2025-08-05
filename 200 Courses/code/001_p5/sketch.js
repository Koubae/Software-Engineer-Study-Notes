import * as basic from "./src/001_basic.js";
import * as vide_player from "./src/002_video_player.js";
import * as circle_moving from "./src/003_circle_moving.js";


//const Demo = basic;
let Demo = vide_player;
Demo = circle_moving;

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