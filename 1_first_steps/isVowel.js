//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(letter){
	if("aeiou".indexOf(letter) !== -1){
		return letter + " is a vowel"
	}
		return letter + " is not a vowel"
}