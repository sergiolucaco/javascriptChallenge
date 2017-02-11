// ### truncate
// Write a JavaScript function to remove specified number of characters from a string.

//     console.log(truncate_string("Robin Singh",4));
//     "Robi"

function getTruncatedString ( strInput, numToRemove){
    
    return strInput.substring(0,numToRemove || strInput.length);
}

// console.log(getTruncatedString("Robin Singh",4));