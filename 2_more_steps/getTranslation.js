//Write a function translate() that will translate a text into "rövarspråket".
//That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".


function getTranslation(text){ 
	var translation = "" 
		for( var i=0 ; i<text.length ; i++){
		if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" ){
			translation += text[i]
		} else if (text[i] == " "){
			translation += " "			
		} else {
			translation += text[i] + "o" + text[i]
		}
		
}
	return translation
}
getTranslation("this is fun");