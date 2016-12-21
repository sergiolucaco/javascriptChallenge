//Write a function filterLongWords() that takes an array of words and an integer i
// and returns the array of words that are longer than i.

function filterLongWords (aList,i){
	var currentWord;
	var longerWord=[]; 
	for (var j=0 ; j<aList.length  ; j++){
		currentWord= aList[j]
		if ( currentWord.length > i){
			longerWord.push(currentWord); 
		} 
	}

return longerWord
}