// ### humanized
// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. 

//     console.log(humanize_format(301)); 
//     console.log(humanize_format(402)); 
//     "301st" 
//     "402nd"

function getOrdinalNum ( numInput ){
	var numToStr = numInput.toString();
	var ordinalNum = numToStr;
	if (numToStr.endsWith(1)){
		ordinalNum += 'st';
	} else if (numToStr.endsWith(2)){
		ordinalNum += 'nd';
	} else if (numToStr.endsWith(3)){
		ordinalNum += 'rd';
	} else {
		ordinalNum += 'th';
	}

	return ordinalNum;
}

// console.log(getOrdinalNum(301));
// console.log(getOrdinalNum(402));
// console.log(getOrdinalNum(404));
// console.log(getOrdinalNum(403));