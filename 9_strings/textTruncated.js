// ### truncate
// Write a JavaScript function to *truncates a string if it is longer than the specified number of characters*. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 

//     console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
//     "We are doing !!"

function textTruncated(strInput, limitChar, specChar = '...'){
	var visibleText = strInput.slice(0,limitChar);
	var textTruncated = strInput.length > limitChar ? `${visibleText} ${specChar}` : `${visibleText}`;
	return textTruncated;
}

// console.log(textTruncated('We are doing JS string exercises.',15,'!!'))
// console.log(textTruncated('We are doing JS string exercises.',34))