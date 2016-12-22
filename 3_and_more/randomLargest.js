// Randomizes three numbers in range (0.. 100) and prints the largest one.

function getRandomLargest(){
	var randomNumZeroToOneHundred;
	var RandomNumLargest = 0; // equal to 0 to secure that loops starts

	for ( var i = 0 ; i < 3 ; i++){
		randomNumZeroToOneHundred = Math.floor(Math.random() * (100)); // get random number in range 0-100
		randomNumZeroToOneHundred > RandomNumLargest ? RandomNumLargest = randomNumZeroToOneHundred : RandomNumLargest ; 
		// only if random number is greater than the previous number it will become the new number.
	}
	
	return `The random largest number is : ${RandomNumLargest}`;
	
}
