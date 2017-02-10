//  Longest Word

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function getLongestWord(str){
	var longestWord = "";
	var wordChecked = str.split(" ").map(word => 
		word.length > longestWord.length ? longestWord = word :	longestWord = longestWord
	);

	return longestWord;

}