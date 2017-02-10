// Write a JavaScript function that reverse a number

// Example x = 32243;
// Expected Output : 34223 

function getReversedNumber (num){
	var stringNumArray = num.toString().split("");
	var arrayOfNumbersReversed = stringNumArray.map(elem => Number(elem)).reverse();
	var numbersReversed = arrayOfNumbersReversed.join("");

	return numbersReversed;

}