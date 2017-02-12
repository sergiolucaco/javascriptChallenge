// ### capitalize_words
// Write a JavaScript function to *capitalize* the first letter *of each word* in a string.

//     console.log(capitalize_Words('js string exercises'));
//     "Js String Exercises"

function capitalizeWords (strInput){
    var strToArr = strInput.split(' ');
    var firstLetterUpp = strToArr.map(elem => 
        `${elem[0].toUpperCase()}${elem.slice(1)}`
        );
    return firstLetterUpp.join(' ');
}

// console.log(capitalizeWords('js string exercises'));