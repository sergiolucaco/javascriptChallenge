// ### uncamelize
// Write a JavaScript function to *uncamelize* a string.

//     console.log(uncamelize('helloWorld','_'));
//     "hello_world"

function uncamelizingString (strInput, sepChar/*= '_'*/){// ES6 allows to set default values like that.
	var separator = sepChar || '_';
	var uncamelizedString = '';
	for (var i = 0; i < strInput.length; i++){
		uncamelizedString += strInput[i] === strInput[i].toUpperCase() ? `${separator}${strInput[i].toLowerCase()}` : strInput[i];
	}

	return uncamelizedString;
}

// console.log(uncamelizingString('helloWorld','_'));
// console.log(uncamelizingString('helloWorld'));