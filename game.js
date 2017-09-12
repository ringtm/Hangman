////////
index.html
////////



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="assets/images">
	<title>Hangman</title>
</head>

<body onload="startup()">


 	<h1>Game of Thrones!!!</h1>

 		<img src="assets/images/GameofThrones.jpg">

 	<h2>Hangman...Northern Style!!!</h2>


 	<div class="boxOne">

 		</div>


 	<div class="boxTwo">

		<h3> Guess the letter to reveal the truth!</h3>
				<input id="letter" type="text">
				<input type="button" value="letter" onclick="letter()"/>
				<p id="answer"></p>
				<p id="counter"></p>
				<p id="stat"></p>

</div>



<script type="text/javascript" src="assets/javascript/game.js"></script>
</body>
</html>


////////
game.js
///////

 var randomWordArr = ["winterfell", "Kings Landing", "Jon Snow"];

var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];


var word;

var count = 0;

var answerArray = [];

function startup() {
	for (var i = 0; i< randomWordArr.length; i++)
{
	answerArray[1] = "_";
}


var word = answerArray.join(" ");
document.getElementById("answer").innerHTML = "";

		if(count>6)
		{
			document.getElementById("stat").innerHTML = "You really suck!!!";
		}
}
function letter()
{
	var letter = document.getElementById("letter").value;

	if (letter.length > 0)
	{
			for (var i = 0 ; i < randomWord.length; i++)
			{
				if (randomWord[i] ===letter)
				{
					answerArray[i] =letter;
				}
			}
}

		count++;
		document.getElementById("counter").innerHTML = "Your Clicks" + count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
}
