// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one.
//  If the number was smaller than 40 nothing should be printed

function getRandomOdd(){
	var randomNumZeroToOneHundred = Math.floor(Math.random()*100);
	var randomOddNum = [];
	if(randomNumZeroToOneHundred < 40){
		return `The random number was : ${randomNumZeroToOneHundred}, so is smaller than 40`;
	}else {
		for (var i = 40 ; i < randomNumZeroToOneHundred ; i++ ){
			if (i % 2 != 0) { randomOddNum.push(i);	}
		}
	}
	return `The odd numbers from 40 to ${randomNumZeroToOneHundred} are ${randomOddNum}`; 
}