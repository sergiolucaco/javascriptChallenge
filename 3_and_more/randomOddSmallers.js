// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one.
//  If the number was smaller than 40, print all the numbers down to the randomized one 
//  (i.e. if the result was 37, you should print: 40, 39, 38, 37)


function getRandomOddSmallers(){
	var randomNumZeroToOneHundred = Math.floor(Math.random()*100);
	var randomOddNum = [];
	var randomOddNumSmallers = [];
	if(randomNumZeroToOneHundred < 40){
		for (var i = 40 ; i > randomNumZeroToOneHundred ; i--){
			randomOddNumSmallers.push(i);
		}
		return `The random number was : ${randomNumZeroToOneHundred}, so the numbers down are : ${randomOddNumSmallers}`;
	}else {
		for (var i = 40 ; i < randomNumZeroToOneHundred ; i++ ){
			if (i % 2 != 0) { randomOddNum.push(i);	}
		}
	}
	return `The odd numbers from 40 to ${randomNumZeroToOneHundred} are ${randomOddNum}`; 
}