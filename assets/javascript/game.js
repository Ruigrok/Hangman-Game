
var words = {};

words.List = ["dog", "cat", "horse", "duck", "elephant", "monkey", "tiger", "dolphin", "whale", "octopus"];
// to have a temporary list of possible choices
//words.ActiveList = ["dog", "cat", "horse", "duck"];
words.Length = words.List.length;
words.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


 // example of removing word from the list when game starts
 // var word_index = words.ActiveList.indexOf(chosenWord);
 // words.ActiveList.splice(word_index, 1);
 // http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript




var game = {};

game.wins = 0;
game.lives = 8;
game.chosenWord = "test";
//create an array with the individual letters for chosen word:
game.lettersInWord = [];
//create an array with underlined individual letters:
game.lettersU = [];
//Word displayed to the screen (blanks and letters):
game.chosenWordDisplay = "";
//Number of words in the word list:
game.wordListLength = words.Length;
//Incorrect letters array:
game.wrongLetters = [];


//can I make game.wordListLength just words.Length?
game.getWord = function() {
	game.chosenWord = words.List[Math.floor(Math.random() * game.wordListLength)];
};

game.setBlanks = function() {
	game.getWord();
	for (var i = 0; i < game.chosenWord.length; i++) {
		game.lettersInWord[i] = game.chosenWord.charAt(i);
		game.lettersU[i] = "_";
	}
	game.chosenWordDisplay = game.lettersU.join("");
	document.getElementById("displayWord").innerHTML = game.chosenWordDisplay; 
};

 game.updateLetter = function(letter) {

 	game.changes = 0;

 	for (var i = 0; i < game.chosenWord.length; i++) {
 		game.lettersInWord[i] = game.chosenWord.charAt(i);
 		if(game.chosenWord.charAt(i) == letter) {
 			game.lettersU[i] = letter;
 			game.changes++;
 		} /*else {
 			game.wrongLetters.push(letter);
 		}*/
 	}

 	if(game.changes < 1) {
 		game.lives--;
 		document.getElementById("lives").innerHTML = game.lives;

 		/*
 		game.wrongLetters = game.wrongLetters.push(letter);
 		document.getElementById("incorrectLetters").innerHTML = game.wrongLetters;
 		*/
 	}

 	game.chosenWordDisplay = game.lettersU.join("");
 	document.getElementById("displayWord").innerHTML = game.chosenWordDisplay;

 	game.wordLetters = game.lettersInWord.join("");
 	game.correctLetters = game.lettersU.join("");

 	/*
 	game.badGuesses = game.wrongLetters.join("");
 	document.getElementById("incorrectLetters").innerHTML = game.badGuesses;
	*/

 	if(game.wordLetters == game.correctLetters) {
 		game.wins++;
 		/*
 		document.getElementById("wins").innerHTML = game.wins;
 		*/
 		alert("You Won");
 		window.location.reload();

 	}

 	if(game.lives < 1) {
 		document.getElementById("displayWord").innerHTML = game.wordLetters;
 		alert("You'll get the next one! Keep playing!");
 		window.location.reload();
 	}
 };


 game.getWord();
 game.setBlanks();


document.onkeyup = function(event) {
	var xyz = event.key || event.KeyCode;
	game.updateLetter(xyz);


};
/*
document.onkeyup = function(event) {
	var xyz = String.fromCharCode(event.KeyCode).toLowerCase();
	if(words.alphabet.indexOf(xyz) > -1) {
		game.updateLetter(xyz);
		*/

/*window.location.reload()*/





















