function setup() {
    createCanvas(500, 500);
}

function draw() {
    /*     stroke(0);
        fill(255, 0, 0);
        rect(100, 100, 200, 200);
        fill(0, 0, 255);
        rect(100, 100, 300, 300); */


    /*     stroke(0);
        fill(0, 0, 255);
        rect(100, 100, 300, 300);
        fill(255, 0, 0, 150);
        rect(100, 100, 200, 200); */

    /*         stroke(0);
            fill(0, 0, 255);
            rect(100, 100, 300, 300);
            fill(255, 0, 0);
            rect(100, 100, 200, 200); */

    /*     fill(0, 0, 255);
        rect(100, 100, 300, 300);
        strokeWeight(10); */
    /* 
        noStroke();
        fill(255, 0, 0, 255);
        rect(100, 100, 200, 200);
        fill(0, 0, 255, 0);
        rect(100, 100, 300, 300); */

    //rect(50, 100, 100, 100);

    /*  triangle(
         100, 100,
         150, 50,
         200, 100
     );
     triangle(
         150, 50,
         200, 100,
         100, 100
     ); */

    background(0);
    fill(200, 0, 0);
    triangle(100, 100, 100, 50, 200, 100);
}

export { setup, draw };