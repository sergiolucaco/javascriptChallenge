// ### capitalize_first
// Write a JavaScript function to *capitalize the first letter of a string*. 

//     console.log(capitalize('js string exercises'));
//     "Js string exercises"

function capitalizeFirstL (strInput) {
    return `${strInput[0].toUpperCase()}${strInput.slice(1)}`;
}

// console.log(capitalizeFirstL('js string exercises'));