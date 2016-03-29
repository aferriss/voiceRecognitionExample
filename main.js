//poly fill to make sure we have speech recognizer with chrome
window.SpeechRecognition = window.SpeechRecognition ||
							window.webkitSpeechRecognition ||
							null;

//initialize the recognizer
var recognizer = new window.SpeechRecognition();
console.log(recognizer);
//recognizer options
recognizer.continuous = true; //keeps listener running forever
recognizer.interimResults = false; //spits results while people are still talking if true
recognizer.maxAlternatives = 5; //5 is the max -- will take a lot longer to return results tho

recognizer.onresult = function(event){
	
	
	//add it to word box along with all the other posibilities

	for(var i = 0; i<event.results[0].length; i++){
		var phrase = event.results[event.results.length-1][i].transcript;
		if(i == 0){
			$("#wordBox").append("<b>"+phrase+"<b><br>");
		} else{
			$("#wordBox").append(phrase+"<br>");
		}
	}

	$("#wordBox").append("<hr>");
};

recognizer.onerror = function(event) {
	console.log(event.error);
};

recognizer.onend = function(){
	//if the recognizer ends for some reason, start it back up
	recognizer.start();
};

//kick things off
recognizer.start();




