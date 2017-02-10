// // The fibonacci sequence is a mathematical sequence of integers. 
// By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
// // 0, 1, 1, 2, 3, 5, 8, 13, ..
// // Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.
// // Hint: Use a recursive function

function getFibonacci(numSeq) {
	
	if ( numSeq === 0) {return 0;}

	if (numSeq === 1) {return 1;}

	return getFibonacci(numSeq-1) + getFibonacci (numSeq-2)
}