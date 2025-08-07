/*
The case of the Python Syndicate
Stage 4

Officer: 6978930
CaseNum: 301-3-49273301-6978930

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var rockyKrayImage;
var annaKarpinskiImage;
var robbieKrayImage;
var bonesKarpinskiImage;

var annaKarpinskiObject;
var pawelKarpinskiObject;
var cecilKarpinskiObject;
var rockyKrayObject;
var robbieKrayObject;
var bonesKarpinskiObject;

//declare your new objects below


/*
var pawelKarpinskiPosX = 115;
var pawelKarpinskiPosY = 40;
var cecilKarpinskiPosX = 408;
var cecilKarpinskiPosY = 40;
var rockyKrayPosX = 701;
var rockyKrayPosY = 40;
var robbieKrayPosX = 408;
var robbieKrayPosY = 309;
var bonesKarpinskiPosX = 701;
var bonesKarpinskiPosY = 309;
*/


function preload() {
	photoBoard = loadImage('photoBoard.png');
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup() {
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObject = {
		x: 115,
		y: 309,
		image: annaKarpinskiImage
	};

	pawelKarpinskiObject = {
		x: 115,
		y: 40,
		image: pawelKarpinskiImage
	};

	cecilKarpinskiObject = {
		x: 408,
		y: 40,
		image: cecilKarpinskiImage
	};

	rockyKrayObject = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};

	robbieKrayObject = {
		x: 408,
		y: 309,
		image: robbieKrayImage
	};

	bonesKarpinskiObject = {
		x: 701,
		y: 309,
		image: bonesKarpinskiImage
	};

	//define your new objects below
}

function draw() {
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);


}