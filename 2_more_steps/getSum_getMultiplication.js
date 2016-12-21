//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


function getSum ( list ){
	var getSumElem = list.reduce(function (preValue,currValue){
	return preValue + currValue
});
	return getSumElem
}


function getMultiplication ( list ){
	var getMultElem = list.reduce(function(preValue,currValue){
	return preValue*currValue
});
	return getMultElem
}

