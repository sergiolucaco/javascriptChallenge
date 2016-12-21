// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".

function getReverse(text){
	var reversedText= "";
	var currentLetter;
	for (var i = text.length - 1; i>=0 ; i--){
		currentLetter= text[i]
		reversedText += currentLetter;
	}
	
	return reversedText;
	console.log(reversedText);
}

getReverse("jag testar");