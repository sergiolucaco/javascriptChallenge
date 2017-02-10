//Write a program that writes in the console all the multiples of 23 less than 500 
//and at the end writes the sum of all of them

function getMultiples23() {

	var numbers = [];
	var result ;

	for (var i=0; i<=500; i+=23) {
			numbers.push(i);
	}
	result = numbers.reduce((prevNum,nextNum) => prevNum + nextNum);
	
	console.log(`The numbers multiples of 23 less than 500 are : ${numbers}.\nThe sum of all of them is : ${result}`)

}