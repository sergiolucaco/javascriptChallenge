// How many vowels

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

// Example string : 'The quick brown fox' 
// Expected Output : 5

function getNumberVowels(str){
	var vowels = "aeiou";
	var aCountVowels = Array.from(str)
						.filter(char => vowels.includes(char)).length;

	return aCountVowels;

}