

// String combinations 

// Write a JavaScript function that generates all combinations of a string

//     Example string : 'dog' 
//     Expected Output : d,do,dog,o,og,g 

function getAllStringCombinations(word){
	var result = "";
	for (var i = 0 ; i < word.length ; i++ ){
		result += word[i];
		console.log(result);	
		
	}
	

}

getAllStringCombinations("dog");
