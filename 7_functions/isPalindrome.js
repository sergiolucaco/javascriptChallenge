// Is palindrome?
// Write a JavaScript function that checks whether a passed string is palindrome
// or not A palindrome is word, phrase, or sequence that reads the same
// backward as forward, e.g., madam or nurses run.

function isAPalindrome(phrase){
	var stringPhraseCleaned = phrase.replace(/[^A-Z]/ig,"").toLowerCase();
	var stringPhraseArray = stringPhraseCleaned.split("");
	var stringPhraseReversed = stringPhraseArray.reverse().join("");
	var isAPalindrome = stringPhraseCleaned === stringPhraseReversed ? ` The phrase or word : ${phrase}, is a palindrome` :  `This phrase/word ${phrase} is not a palindrome (${stringPhraseReversed}).`
	
	return isAPalindrome;
}