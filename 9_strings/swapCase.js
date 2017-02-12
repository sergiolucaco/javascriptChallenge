// ### swapcase
// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and *converts upper case letters to lower case*, and lower case letters to upper case.

//     console.log(swapcase('AaBbc'));
//     "aAbBC"

function swapcase ( strInput ){
    var swappingCase = '';
    for ( var i = 0 ; i < strInput.length ; i++){
        swappingCase += strInput[i] === strInput[i].toUpperCase() ? strInput[i].toLowerCase() : strInput[i].toUpperCase();
    }

    return swappingCase;

}

console.log(swapcase('AaBbc'));