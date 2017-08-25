var randomWordArr = ["winterfell", "Kings Landing", "Jon Snow"];

var randomWord = randonWordArr[Math.floor(Math.random() * randomWordArr.length)];


var = word;

var count = 0;

var answerArray = [];

function startup() {
	for (var i = 0; i< randomWordArr.length; i++)
{
	answerArray[1] = "_";
} 


var word = answerArray.join(" ");
document.getElementsByID("answer")innerHTML = s;




function letter()
{
	var letter = document.getElementsByID("letter").value;

	if (letter.length > )
	{ 
			for (var i = ; i < randomWord.length; i++)
			{
				if (randomWord[i] ===letter)
				{
					answerArray[i] =letter;
				}
			}
}

		count++;
		document.getElementsByID("counter")innerHTML = "Your Clicks": + count;
		document.getElementsByID("answer")innerHTML = answerArray.join(" ");
}
		if(count>6)
		{
			document.getElementsByID("stat").innerHTML = "You really suck!!!";
		}
}