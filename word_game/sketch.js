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
	noiseWord = select('#noiseWord').value();
	plural = select('#plural').value();
	verb1 = select('#verb1').value();

	verb2 = select('#verb2').value();
	verb3 = select('#verb3').value();
	adverb = select('#adverb').value();
	adject1 = select('#adject1').value();

	name = select('#name').value();
	adject2 = select('#adject2').value();
	relative = select('#relative').value();
	noun3 = select('#noun3').value();

	
	story.style('visibility: visible');
	story.html("Have I ever told you how I met " + name + "? <br>Well it was a dark and " + adject1 + " evening, I had just helped my " + relative + " into bed when I heard a loud " + noiseWord + " at my front door. They told me their " + noun1 + " broke down and asked if I could " + verb1 + ". Well, I didn't have any " + plural + " so I invited them in. Next thing I know, we have been " + verb2 + " for hours! For being such " + adject2 + " company I " + adverb + " gave them my " + noun3 + " and told them to " + verb3 + " anytime. And that's how I met " + name + ".");
	/**
	 * Story element starts invisible and is made visible by this call
	 */
}
