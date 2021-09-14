(function() {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

    function compareUserGuess (event: any) {
        event.preventDefault();

        const correctAnswer: string = rightAnswer();
        const input: string = (<HTMLInputElement>document.getElementById('guess')).value;

        if (correctAnswer == input) { 
            alert("Awesome! Your answer: " + input + " was correct 👏🏿 👏🏻. You can be named many things, stupid not being one of them. On to the next question");
        } else {
            alert("Bummer... You guessed " + input + ". and that's wrong 🤦🏽 🤦🏼! Please try again !");
        }
    }

    function rightAnswer() {
        const correctAnswer = 'CSS';

        return correctAnswer;
    }
})();