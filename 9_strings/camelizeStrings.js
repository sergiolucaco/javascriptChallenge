// ### camelize
// Write a JavaScript function *to convert a string into camel case*.

//     console.log(camelize("JavaScript Exercises")); 
//     console.log(camelize("JavaScript exercises")); 
//     console.log(camelize("JavaScriptExercises"));
//     "JavaScriptExercises" 
//     "JavaScriptExercises" 
//     "JavaScriptExercises"
    
function camelizingStrings ( strInput ){
    var strToArr = strInput.split(' ');
    var firstLetterUpperNoSpaces = strToArr.map( elem =>  
            elem[0].toUpperCase() + elem.slice(1)
        ).join('');
    return `The camelcase version of ${strInput} is :${firstLetterUpperNoSpaces}`;
}


// console.log(camelizingStrings("JavaScript Exercises")); 
// console.log(camelizingStrings("JavaScript exercises")); 
// console.log(camelizingStrings("JavaScriptExercises"));