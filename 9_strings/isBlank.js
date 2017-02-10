// ### is_Blank
// Write a JavaScript function to check whether a string *is blank or not*. Go to the editor

//     console.log(is_Blank('')); 
//     console.log(is_Blank('abc'));
//     true 
//     false

function isBlank (input){
	var isBlank = input.length == 0 ? ` The value of "${input}" is blank ` : ` The value of "${input}" is not a blank `;
	return isBlank;
}

// console.log(isBlank('abc'));
// console.log(isBlank(''));