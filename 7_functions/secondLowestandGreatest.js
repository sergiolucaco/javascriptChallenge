// ## Second lowest and second greatest

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

//     Sample array : [1,2,3,4,5]
//     Expected Output : 2,4 

function getSecondLowestGreatest (arr) {

	var arraySorted = arr.sort((a,b)=> a - b);
	
	return `The second smallest number is ${arraySorted[1]} and the second greatest is ${arraySorted[arraySorted.length-2]}`;		
}

// console.log(getSecondLowestGreatest([1,2,3,4,5]));
// console.log(getSecondLowestGreatest([2,23,72,5]));
