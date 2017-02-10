// ## Perfect Numbers

// Write a JavaScript function which says whether a number is perfect.

// > According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// > Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfectNum(num){
	var positiveDivisorsIncludingNum = [];
	var positiveDivisors;
	var resultOfDivisors;
	var resultOfDivisorsIncludingNum;

	for (var i = 0 ; i <= num ; i++){
		if( num % i === 0){ positiveDivisorsIncludingNum.push(i); }
	}
	positiveDivisors = positiveDivisorsIncludingNum.slice(0,positiveDivisorsIncludingNum.length - 1);

	resultOfDivisors = positiveDivisors.reduce((div1,div2)=> div1 + div2);
	resultOfDivisorsIncludingNum = positiveDivisorsIncludingNum.reduce((div1,div2)=> div1 + div2);

	var result = resultOfDivisors === num && resultOfDivisorsIncludingNum / 2 === num ?  `The number ${num} is a perfect num ` :   `The number ${num} is not a perfect num `;

	return result;
}

// console.log(isPerfectNum(6));
// console.log(isPerfectNum(23));
// console.log(isPerfectNum(38));
// console.log(isPerfectNum(2));
// console.log(isPerfectNum(28));
// console.log(isPerfectNum(496));
// console.log(isPerfectNum(8128));