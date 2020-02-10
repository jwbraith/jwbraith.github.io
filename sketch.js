//the text container for the number
//the button variable
//the number to put in the text container

let choppedTrees;
let axe;
let firstVal = 0;

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
	//assign selected ids to each text container
	choppedTrees = select('#numTrees');
	numBeavers = select('#beavers');
	numBreeders = select('#breeders');

	//assign buttons by selected id
	axe = select('#axe');
	buy = select('#buy');
	hire = select('#hire');

	//tie functions to each clickable button
	axe.mousePressed(increaseVal);
	buy.mousePressed(buyBeav);
	// hire.mousePressed();

	thirdRow = select('#thirdRow');
	thirdRow.style('display:none');
}

function increaseVal() {
	firstVal++;
}

function buyBeav() {
	if (firstVal >= 10) {
		firstVal -= 10;
		secondVal += 1;
	}
}



function draw() {
	choppedTrees.html(firstVal.toFixed(2));
	numBeavers.html(secondVal.toFixed(2));
	numBreeders.html(thirdVal.toFixed(2));
	for (let i = 0;i<secondVal;i++) {
		firstVal += 0.002;
	}
	if (firstVal > 5) {
		thirdRow.style('display:block');
	}
	// clear();
	// pee = createP(firstVal);
	// background(bgcolour);
}