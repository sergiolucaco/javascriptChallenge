// ### count
// Write a JavaScript function to *count the occurrence of a substring* in a string. 

//     console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
//     Output :
//     2

function substringCounter(strInput,substRepeated){
var count = 0;
var strToArr = strInput.toLowerCase().split(' ');
var substRepeatedLower = substRepeated.toLowerCase();

strToArr.forEach(elem =>{

	if( elem.indexOf( substRepeatedLower ) !== -1 ) {	count ++ ; } 

});

	return `The "${substRepeated}" word was found ${count} times in the sentence: ${strInput}`;
}

// console.log(substringCounter("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(substringCounter("The quick brown fox jumps over the lazy dog", 'fox'));
// console.log(substringCounter("The quick brown fox jumps over the lazy dog", 'jump'));
