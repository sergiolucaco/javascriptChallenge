// ## Is prime

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function  isPrimeNumber (num){
	var result = "";
	if ( num >= 1 ) {
		var primeNumbers = [];
		for (var i = num ; i >= 1 ; i--){
			if ( num % i === 0){
				primeNumbers.unshift(i);
			}
		}
		primeNumbers.length === 2 || primeNumbers.length === 1 ? result = `The number ${num} is a prime number because it has only this/these divisor/s : (${primeNumbers})` : result = `The number ${num} is not a prime number because as you can see its divisors : (${primeNumbers}) are more than two`		
	} else {
		result = "Please, enter try again with a positive number";
	}

	return result;
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(30));
