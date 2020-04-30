let noun1, noun2, plural, verb1;
let verb2, verb3, adverb, adject1;
let name, adject2, relative, adject3;

let button;
let reset;

let story;

function setup() {
	button = select('.submitter');
	button.mousePressed(assignWords);
	reset = select(".resetter");
	reset.mousePressed(resetButton);
	story = select('#story');

}

function resetButton() {
	story.style('visibility: hidden');
}

function assignWords() {
	noun1 = select('#noun1').value();
	noun2 = select('#noun2').value();
	plural = select('#plural').value();
	verb1 = select('#verb1').value();

	verb2 = select('#verb2').value();
	verb3 = select('#verb3').value();
	adverb = select('#adverb').value();
	adject1 = select('#adject1').value();

	name = select('#name').value();
	adject2 = select('#adject2').value();
	relative = select('#relative').value();
	adject3 = select('#adject3').value();

	
	story.style('visibility: visible');
	story.html("Dear " + relative + " <br>I am having tons of fun at Camp " + noun1 + ". I made a " + adject1 + " friend named " + name + ". They taught me how to " + verb1 + " " + adverb + ". I can't wait to show you! We played a " + adject2 + " game where we had to catch " + plural + " with a " + noun2 + ". Last night my fave counsellor " + verb3 + " me on the shoulder and told me I'm the best at " + verb2 + "! Can you believe that? I promise I'll bring you back a " + noun1 + "! <br><br>Love, <br>Johnny");
	/**
	 * Story element starts invisible and is made visible by this call
	 */
}
