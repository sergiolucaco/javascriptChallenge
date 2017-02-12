// ### repeat
// Write a JavaScript function to *concatenates a given string n times* (default is 1).

//     console.log(repeat('Ha!',3));
//     "Ha!Ha!Ha!"

function repeatingString (strInput, nTimes = 1){
	return strInput.repeat(nTimes);
}

// console.log(repeatingString('Ha!',3));