// ### is_string
// Write a JavaScript function to check whether an `input` is a *string or not*. Go to the editor

//     console.log(is_string('w3resource')); 
//     true
//     console.log(is_string([1, 2, 4, 0]));
//     false

function isAString ( input ){
	var result = typeof input === 'string' || input instanceof String ? ` ${input} is a string data ` : ` ${input} is not string data but it is a/an ${typeof input} data `;
	return result;
}

// console.log(isAString('w3resource'));
// console.log(isAString([1,2,'hi']));