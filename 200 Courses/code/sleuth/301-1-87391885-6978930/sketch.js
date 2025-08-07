/*
The case of the Python Syndicate
Stage 2


Officer: 6978930
CaseNum: 301-1-87391885-6978930

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil karpinski

- The variables for Cecil karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Cecil karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var anna_karpinski_img;
var countess_hamilton_img;
var cecil_karpinski_img;
var robbie_kray_img;
var lina_lovelace_img;
var bones_karpinski_img;


var cecil_karpinski_coordinate_x = 701;
var cecil_karpinski_coordinate_y = 40;


function preload() {
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	lina_lovelace_img = loadImage("lina.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");

}

function setup() {
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_img, cecil_karpinski_coordinate_x, cecil_karpinski_coordinate_y);

	image(anna_karpinski_img, cecil_karpinski_coordinate_x - 586, cecil_karpinski_coordinate_y);
	image(countess_hamilton_img, cecil_karpinski_coordinate_x - 293, cecil_karpinski_coordinate_y);
	image(robbie_kray_img, cecil_karpinski_coordinate_x - 586, cecil_karpinski_coordinate_y + 269);
	image(lina_lovelace_img, cecil_karpinski_coordinate_x - 293, cecil_karpinski_coordinate_y + 269);
	image(bones_karpinski_img, cecil_karpinski_coordinate_x, cecil_karpinski_coordinate_y + 269);

}