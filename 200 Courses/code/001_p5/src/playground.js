var a = 0;

var x = 42;
console.log(y);
function setup() {
    createCanvas(500, 500);
}
function draw() {
    background(200); fill(255, 0, 255); ellipse(a, a, 100, 100); a += 1; console.log(a);
}
export { setup, draw };