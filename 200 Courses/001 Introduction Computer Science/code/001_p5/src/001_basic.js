function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
    
 // Slow the frame rate.
  //frameRate(5);

  describe('A white half-circle on the left edge of a gray square.');

}

function draw() {
  background("aqua");



  circle(200,200,100);

  for (let i = 0; i < 10; i++) {
    let x = 10 * i;
    let y = 10 * i;
    let r = 10 * i;
    circle(x, y, r);
  }
  drawCircleOnMousePressed();
  
}

function circleParty() {
for (let i = 0; i < 3; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(10, 50);
    fill(random(255), random(255), random(255));
    circle(x, y, r);
  }
}

function drawCircleOnMousePressed() {
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  circle(mouseX, mouseY, 100);
}


export {setup, draw};