//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", 
//"happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.


function translateEngtoSwe (msg){
	var dictionary = { 
		merry : "god",
		christmas : "jul",
		and : "och",
		happy : "gott",
		new : "nytt",
		year : "år"
	}

	var wordsMsg = msg.split(" ");
	var translatedMsg=[];
	
	for(var i=0; i<wordsMsg.length; i++){
		
		translatedMsg.push(dictionary[wordsMsg[i]])
	}
	return translatedMsg.join(" ")
}

translateEngtoSwe("merry christmas and happy new year");