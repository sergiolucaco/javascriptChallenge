// String combinations

// Write a JavaScript function that generates all combinations of a string

// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function getAllCombinations(str){
	var afinalResult = [];
	for(var i = 0 ; i<str.length ; i++){
	for ( var j = i+1 ; j <= str.length ; j++){
			afinalResult.push(str.slice(i,j))
		}
	}
	return afinalResult.join();
}