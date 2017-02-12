// ### parameterize
// Write a JavaScript function to *parameterize a string*.

//     console.log(string_parameterize("Robin Singh from USA."));
//     "robin-singh-from-usa"

function stringParametrized ( strInput ){
    var parameterizingStrings = strInput.toLowerCase().replace(/\.$/,'').replace(/\s/g, '-');
    return parameterizingStrings;
}

// console.log(stringParametrized('Robin Singh from USA.'));