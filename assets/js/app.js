// Trivia Game JS

$(document).ready(function(){

	var seconds = 30;

	function run() {
		counter = setInterval(decrement, 1000);
	}

	function stop() {
		clearInterval(counter);
	}

	function decrement(){
		seconds--;
		$('#countdown').html(seconds);
		if (seconds === 0) {
			stop();
		}
	}

	run();


	var questionsArray = [
		{
			text: "<p>What is D'Argo's son's name?</p>",
			choices: ['Lolan', 'Jothee', 'M\'el'],
			answer: 'Jothee'
		},
		{
			text: "<p>What was Aeryn Sun's regiment when she was a Peacekeeper?</p>",
			choices: ['Plaisar', 'Wolgin', 'Matik'],
			answer: 'Plaisar'
		},
		{
			text: "<p>What region of space did Moya hide in during most of season 4?</p>",
			choices: ['Tormented Space', 'The Scarran Empire', 'Ommin Space'],
			answer: 'Tormented Space'
		}
	]


	for (var i = 0; i < questionsArray.length; i++) {
		console.log(questionsArray[i]);
		var question = questionsArray[i];

		var block = $('<li class="question">');

		var text = $('<div class="question-text">');
		text.html('' + questionsArray[i].text);

		var choices = $('<ul class="choices-list">');
		choices.html(questionsArray[i].choices);


		block.append(text);
		block.append(text);
		block.appendTo('#showQuestions');
	}

	$('#submit').on('click', function() {
		var correctGuesses = 0;
		var incorrectGuesses = 0;
		var unanswered = 0;


	})



	// not working

	if (seconds === 0) {
		$('#showQuestions').html('<h1>Time\'s Up!</h1>');
		// stick the guesses variables in here
	}



}); // Closing $(document).ready

