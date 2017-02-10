//Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.

function getMaxValue (a,b){
	if ( a > b){
		console.log( " The larger number is " + a);
	}else {
		console.log( " The larger number is " + b);
	}
};

// Another version :

function getMaxValue (num1,num2){
	var log ="";
	num1 > num2 ? log = `The larger number between ${num1} and ${num2} is : ${num1}` : log = `The larger number between ${num1} and ${num2} is : ${num2}`;
	return log;  
}

