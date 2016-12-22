// Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
// For instance, if the randomized number was 1049, program should print 14

function getRandomSum(){
	var randomFourLengthNum = Math.floor((Math.random() * (9999 - 1000)) + 1000);
	var randomSum ;

	randomSum = randomFourLengthNum.toString().split("").map(Number).reduce((prevNum,nextNum) => prevNum + nextNum,0);


	return `The random number from 1000 to 9999 was : ${randomFourLengthNum} and the sum of its digits is : ${randomSum}`;

}