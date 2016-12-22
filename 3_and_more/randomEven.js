//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function getRandomEven(){
	var randomNumZeroToOneHundred = Math.floor(Math.random()*100);
	var evenNumbers = [];
	for (var i = 0 ; i <= randomNumZeroToOneHundred ; i++ ){
		i % 2 ? evenNumbers.push(i) : 'There is no even numbers in this particular case.' ;	
	}
	
	return `The random number is : ${randomNumZeroToOneHundred} and all the even Numbers from 0 to this number are : ${evenNumbers.join(' | ')}.`;
	
}