// ### abbrev_name
// Write a JavaScript function *to convert* a string in *abbreviated form*.

//     console.log(abbrev_name("Robin Singh"));
//     "Robin S."

function abbrevName ( strInput ){
    var strToArray = strInput.trim().split(' ');
    var abbrevName = strToArray.length > 1 ? `The abbreviated form of ${strInput} is : ${strToArray[0]} ${strToArray[1][0]}.` : `Please, enter your name and your lastname` ;
    if ( strToArray.length > 2 ){
        abbrevName += ` ${strToArray[2][0]}.`
    }
    return abbrevName;
}

// console.log(abbrevName('Robin Singh'));