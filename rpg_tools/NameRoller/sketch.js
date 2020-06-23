let list1 = ["a", "ael", "af", "ak", "al", "am", "an", "ar", "baf",
	"bar", "bee", "bel", "ber", "berd", "bes", "bo", "bo", "bol", "bor", "bran",
	"brose", "bru", "bur", "car", "chor", "cig", "cla", "da", "da", "dan",
	"do", "do", "dock", "doh", "don", "dor", "dor", "dre", "drebb", "e",
	"eg", "ek", "el", "el", "end", "er", "er", "es", "eth", "eth", "ev", "fal",
	"fan", "far", "feg", "fen", "fi", "ful", "fum", "ga", "gahn", "gaith",
	"gar", "gar", "gen", "ger", "glen", "go", "go", "gram", "grink", "gulf",
	"ha", "hag", "hal", "han", "harg", "ho", "hol", "hor", "i", "ig", "in",
	"ith", "jax", "jo", "jur", "ka", "kan", "kra", "krac", "ky", "la", "laf",
	"lag", "lap", "le", "lef", "lem", "lis"];
let list2 = ["lo", "lu", "mal", "mar", "me", "mer", "mez", "mez",
	"mich", "mil", "mis", "mo", "mo", "moo", "mul", "mun", "mun", "mur",
	"mus", "na", "na", "ned", "nes", "nick", "no", "nor", "nos", "nu", "o",
	"omes", "os", "pal", "pen", "phil", "po", "pos", "poy", "pres", "pus",
	"quas", "que", "ra", "rag", "ralt", "ram", "ray", "ree", "rem", "rin",
	"ris", "ro", "ro", "ron", "sa", "sa", "see", "ser", "shal", "sho",
	"sho", "sil", "sit", "spor", "sun", "sur", "sus", "tar", "tar", "tas",
	"tee", "ten", "ten", "teth", "to", "to", "ton", "ton", "tra", "treb",
	"tred", "tue", "u", "va", "vak", "ven", "ver", "wal", "web", "wil",
	"xor", "y", "yor", "ys", "zef", "zell", "zen", "zer", "zo", "zo", "zort"];

let titles = ["from Above", "from Afar", "from Below", "the Adept", "the Albino",
	"the Antiquarian", "the Arcane", "the Archaic", "the Barbarian", "the Batrachian",
	"the Battler", "the Bilious", "the Bold", "the Brave", "the Civilized", "the Collector",
	"the Cryptic", "the Curious", "the Dandy", "the Daring", "the Decadent", "the Delver",
	"the Distant", "the Eldritch", "the Exotic", "the Explorer", "the Fair", "the Fearless",
	"the Fickle", "the Foul", "the Furtive", "the Gambler", "the Ghastly", "the Gibbous",
	"the Great", "the Grizzled", "the Gruff", "the Bald", "the Haunted", "the Lean",
	"the Hooded", "the Hunter", "the Imposing", "the Irreverent", "the Loathsome", "the Loud",
	"the Lovely", "the Mantled", "the Masked", "the Merciful", "the Mercurial", "the Mighty",
	"the Morose", "the Mutable", "the Mysterious", "the Obscure", "the Old", "the Ominous",
	"the Peculiar", "the Perceptive", "the Pious", "the Quick", "the Ragged", "the Ready",
	"the Rugose", "the Scarred", "the Searcher", "the Shadowy", "the Short", "the Steady", "the Uncanny",
	"the Unexpected", "the Unknowable", "the Verbose", "the Vigorous", "the Wanderer", "the Wary",
	"the Weird", "the Red", "the Fourth", "of the Blue Cloak", "of the East",
	"of the Arid Wastes", "of the Beetling Brow", "of the Cyclopean City",
	"of the Dread Wilds", "of the Eerie Eyes", "of the Foetid Swamp", "of the Forgotten City",
	"of the Haunted Heath", "of the Howling Hills", "of the Jagged Peaks",
	"of the Menacing Mien", "of the Savage Isle", "of the Tangled Woods", "of the Watchful Eyes",
	"the Hairy", "the Merciless"];
let button;
let statement;
function setup() {
	button = createButton("Roll for name");
	statement = createP(rollName());
	button.mousePressed(changeName);
}
function changeName() {
	statement.html(rollName());
}


function rollName() {
	let titleChoice = floor(random(100));
	let title = titles[titleChoice];
	let numberOfSyllables = floor(random(99));
	if (numberOfSyllables < 10) {
		console.log("A single syllable!");
		let returnName = "";
		let tableChoice = random(6);
		if (tableChoice < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			returnName = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			returnName = list2[syllable];
		}
		return returnName.substring(0,1).toUpperCase() + returnName.substring(1) + " " + title;
	} else if (numberOfSyllables >= 10 && numberOfSyllables < 70) {
		console.log("A pair of syllables!");
		let tableChoice1 = random(6);
		let tableChoice2 = random(6);
		let firstSyl = "";
		let secondSyl = "";
		if (tableChoice1 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			firstSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			firstSyl = list2[syllable];
		}
		if (tableChoice2 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			secondSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			secondSyl = list2[syllable];
		}
		console.log(firstSyl + secondSyl);
		return firstSyl.substring(0,1).toUpperCase() + firstSyl.substring(1) + secondSyl + " " + title;
	} else if (numberOfSyllables >= 70 && numberOfSyllables < 90) {
		console.log("A trio of syllables!");
		let tableChoice1 = random(6);
		let tableChoice2 = random(6);
		let tableChoice3 = random(6);
		let firstSyl, secondSyl, thirdSyl = "";
		if (tableChoice1 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			firstSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			firstSyl = list2[syllable];
		}
		if (tableChoice2 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			secondSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			secondSyl = list2[syllable];
		}
		if (tableChoice3 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			thirdSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			thirdSyl = list2[syllable];
		}
		console.log(firstSyl + secondSyl + thirdSyl);
		return firstSyl.substring(0,1).toUpperCase() + firstSyl.substring(1) + secondSyl + thirdSyl + " " + title;
	} else {
		console.log("A quartet of syllables!");
		let tableChoice1 = random(6);
		let tableChoice2 = random(6);
		let tableChoice3 = random(6);
		let tableChoice4 = random(6);
		let firstSyl, secondSyl, thirdSyl, fourthSyl = "";
		if (tableChoice1 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			firstSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			firstSyl = list1[syllable];
		}
		if (tableChoice2 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			secondSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			secondSyl = list1[syllable];
		}
		if (tableChoice3 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			thirdSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			thirdSyl = list2[syllable];
		}
		if (tableChoice4 < 3) {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list1[syllable]);
			fourthSyl = list1[syllable];
		} else {
			let syllable = floor(random(99));
			console.log(syllable);
			console.log(list2[syllable]);
			fourthSyl = list1[syllable];
		}
		console.log(firstSyl + secondSyl + thirdSyl + fourthSyl);
		return firstSyl.substring(0,1).toUpperCase() + firstSyl.substring(1) + secondSyl + thirdSyl + fourthSyl + " " + title;
	}
}

function draw() {
}

