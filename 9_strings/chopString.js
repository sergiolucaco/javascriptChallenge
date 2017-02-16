// ### chop
// Write a JavaScript function *to chop a string into chunks of a given length*.

//     console.log(string_chop('w3resource',2)); 
//     ["w3", "re", "so", "ur", "ce"]

function chop (strInput, lengthElem){
	var result = [];
	for (var i = 0 ; i < strInput.length ; i+= lengthElem){
		console.log(strInput[i]);
		result.push(strInput.slice(i,i+lengthElem));
	}

	return result;
}

// console.log(chop('w3resource',2));
