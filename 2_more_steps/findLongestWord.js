//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(aList){
	
	var longestWord = "" 
	var currentWord;

	for ( i = 0 ; i < aList.length ; i++){
		currentWord = aList[i];
		if( currentWord.length > longestWord.length ) { 
			longestWord = currentWord; 
			
	}
	return longestWord;
}

findLongestWord(["pepe","carlos","francisco","esteban"]);