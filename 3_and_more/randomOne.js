// Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. 
// For instance, if the randomized number was 1049, program should print 5

function getRandomOne(){
	var randomFourLengthNum = Math.floor((Math.random() * (9999 - 1000))+ 1000);
	var randomSum = randomFourLengthNum.toString().split("").map(Number).reduce((prevNum,nextNum)=> prevNum + nextNum,0);
	var randomSumUntilOneDigit = randomSum.toString().split("").map(Number).reduce((prevNum,nextNum)=> prevNum + nextNum,0); 

	randomSum.length != 1 ? randomSum = randomSumUntilOneDigit : randomSum ; 

	return `Random number generated was : ${randomFourLengthNum}. \n The sum of its digits is : ${randomSumUntilOneDigit}.`; 
}