// ### insert
// Write a JavaScript function to insert a string within a string at a *particular position* (default is 1).

 
//     console.log(insert('We are doing some exercises.','JavaScript ',18));
//     "We are doing some exercises." 
//     "JavaScript We are doing some exercises." 
//     "We are doing some JavaScript exercises."

function insertString ( strInput, wordInput = '', nPos = 0){

	return `${strInput.slice(0,nPos)}${wordInput}${strInput.slice(nPos)}`
}

// console.log(insertString('We are doing some exercises.'));
// console.log(insertString('We are doing some exercises.','JavaScript '));
// console.log(insertString('We are doing some exercises.','JavaScript ',18));