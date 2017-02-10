// Define a function called add with a single argument input. 
// The input to the function will be a string containing a comma-separated list of numbers. 
// The function must return the sum of the numbers. e.g.

// add(1,2,3,4) // => 10

function stringCalculator(numberStrings){
	var stringToArray = numberStrings.split(",");
	var stringToNumber = stringToArray.map(elem => Number(elem));
	var sumNum = stringToNumber.reduce((prevNum,currNum) => prevNum + currNum);
	
	return sumNum;
	
	}