// //  Uppercase First Letter

// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// // Example string : 'the quick brown fox' 
// // Expected Output : 'The Quick Brown Fox '

function getUppercaseFirstLetter(str){

	var firstLettersModified = str.split(" ").map(character => character[0].toUpperCase() + character.substring(1)).join(" ");
	return firstLettersModified;
}