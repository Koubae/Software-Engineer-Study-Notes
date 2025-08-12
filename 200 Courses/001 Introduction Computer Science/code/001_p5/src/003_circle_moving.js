

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

const CircleXPos = {
    x: 0,
    y: 0,
    speed: 10,
    size: 100,
};

const CircleYPos = {
    x: 0,
    y: 0,
    speed: 10,
    size: 100,
};



function draw() {
    background(51);

    moveCircleX();
    moveCircleY();

    fill(255);
    textSize(32);
    text('Circle X', CircleXPos.x, CircleXPos.y - 20);
    text('Circle Y', CircleYPos.x, CircleYPos.y - 20);

}

function moveCircleX() {
    fill(255, 0, 0);
    CircleXPos.x += CircleXPos.speed;
    CircleXPos.y = window.windowHeight / 3;

    circle(CircleXPos.x, CircleXPos.y, CircleXPos.size);
    if (CircleXPos.x > window.windowWidth) {
        CircleXPos.x = 0;
    }   
}


function moveCircleY() {
    fill(0, 255, 0);
    CircleYPos.y += CircleYPos.speed;
    CircleYPos.x = window.windowWidth / 2;

    circle(CircleYPos.x, CircleYPos.y, CircleYPos.size);
    if (CircleYPos.y > window.windowHeight) {
        CircleYPos.y = 0;
    }   
}


export {setup, draw};