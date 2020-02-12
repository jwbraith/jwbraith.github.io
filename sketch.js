//the text container for the number
//the button variable
//the number to put in the text container
//the number to put in the rate text container
//the number that auto increases the number of chopped trees

let choppedTrees;
let axe;
let firstVal = 0.0;
let treeRate;
let chopRate = 0.0;

//the text container for the beavers number
//the button variable for buying a new beaver
//the number to put in the text container

let numBeavers;
let buy;
let secondVal = 0;

//the text container for the number of beaver breeders
//the button variable for hiring a new beaver breeder
//the number to put in the text container

let numBreeders, hire, thirdVal = 0;

//var for the hidden table row containing breeders
//allows it to be revealed by meeting a condition
let thirdRow;


function setup() {
	// createCanvas(500, 500);
	frameRate(20);
	//assign selected ids to each text container
	choppedTrees = select('#numTrees');
	numBeavers = select('#beavers');
	numBreeders = select('#breeders');
	treeRate = select('#treeRate');

	//assign buttons by selected id
	axe = select('#axe');
	buy = select('#buy');
	hire = select('#hire');

	//tie functions to each clickable button
	axe.mousePressed(increaseVal);
	buy.mousePressed(buyBeav);
	hire.mousePressed(hireBreeder);

	thirdRow = select('#thirdRow');
	thirdRow.style('visibility:hidden');
}

function increaseVal() {
	firstVal++;
}

function buyBeav() {
	if (firstVal >= 2) {
		secondVal += 1;
		chopRate = secondVal * 0.002;
		firstVal -= 2;
	}
}

function hireBreeder() {
	if (secondVal >= 4) {
		thirdVal += 1;
		secondVal -= 4;
	}
}



function draw() {
	choppedTrees.html(firstVal.toFixed(2));
	numBeavers.html(secondVal.toFixed(2));
	numBreeders.html(thirdVal.toFixed(2));
	treeRate.html(chopRate.toFixed(3));
	if (secondVal > 0) {
		firstVal += chopRate;
	}
	if (firstVal > 5) {
		thirdRow.style('visibility:visible');
	}

}