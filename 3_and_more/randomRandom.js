// Randomizes a number n in range 0..100. 
// Now randomizes n more numbers in that range, printing the largest of them.

function getRandomRandom(){
	var randomNumFromZeroToOneHundred = Math.floor(Math.random()*100);
	var largestRandomNum = 0;
	var count = 0;
	var randomNMoreNumbers ;
	for (var i = 0; i < randomNumFromZeroToOneHundred ; i++){
		randomNMoreNumbers = Math.floor(Math.random()*100);
		count ++;
		// console.log(`Randoms number generated in round ${count} was : ${randomNMoreNumbers}`);
		if(randomNMoreNumbers > largestRandomNum){ largestRandomNum = randomNMoreNumbers };
		// console.log(`Largest Random Number : ${largestRandomNum}`);
	}
	return `There were generated ${randomNumFromZeroToOneHundred} random numbers which --> ${largestRandomNum} <-- was the largest one`; 
}