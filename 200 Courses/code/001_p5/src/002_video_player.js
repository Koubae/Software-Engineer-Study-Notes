let startButton;
let stopButton;

function setup() {
  createCanvas(100, 100);

  // Create the button elements and place them
  // beneath the canvas.
  startButton = createButton('▶');
  startButton.position(0, 100);
  startButton.size(50, 20);
  stopButton = createButton('◾');
  stopButton.position(50, 100);
  stopButton.size(50, 20);

  // Set functions to call when the buttons are pressed.
  startButton.mousePressed(loop);
  stopButton.mousePressed(noLoop);

  // Slow the frame rate.
  frameRate(5);

  describe(
    'A white circle moves randomly on a gray background. Play and stop buttons are shown beneath the canvas. The circle stops or starts moving when the user presses a button.'
  , LABEL);
}

function draw() {
  background(200);

  // Calculate the circle's coordinates.
  let x = random(0, 100);
  let y = random(0, 100);

  // Draw the circle.
  // Normally, the circle would move from left to right.
  circle(x, y, 20);
}

export { setup, draw };

