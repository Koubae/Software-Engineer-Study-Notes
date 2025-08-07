/*
The case of the Python Syndicate
Stage 1

Officer: 6978930
CaseNum: 301-0-39578400-6978930

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
	- One has already been done for you.
	- Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var countess_hamilton_image;
var bones_karpinski_image;
var lina_lovelace_image;
var anna_karpinski_image;
var rocky_kray_image;
var pawel_karpinski_image;



//declare your new variables below
var bones_karpinski_x_position = 408;
var bones_karpinski_y_position = 40;

var countess_hamilton_x_position = 115;
var countess_hamilton_y_position = 40;

var lina_lovelace_x_position = 701;
var lina_lovelace_y_position = 40;

var anna_karpinski_x_position = 115;
var anna_karpinski_y_position = 309;

var rocky_kray_x_position = 408;
var rocky_kray_y_position = 309;

var pawel_karpinski_x_position = 701;
var pawel_karpinski_y_position = 309;

function preload() {
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup() {
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_image, bones_karpinski_x_position, bones_karpinski_y_position);

	image(countess_hamilton_image, countess_hamilton_x_position, countess_hamilton_y_position);
	image(lina_lovelace_image, lina_lovelace_x_position, lina_lovelace_y_position);
	image(anna_karpinski_image, anna_karpinski_x_position, anna_karpinski_y_position);
	image(rocky_kray_image, rocky_kray_x_position, rocky_kray_y_position);
	image(pawel_karpinski_image, pawel_karpinski_x_position, pawel_karpinski_y_position);

}