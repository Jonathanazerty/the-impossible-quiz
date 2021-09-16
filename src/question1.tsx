import React, {MouseEvent} from 'react';
import './questions.css';
import Header from './header';
import { Link } from 'react-router-dom';

const Question1 = () => {

    (() => {
        // (document.getElementById('question-form') as HTMLInputElement).addEventListener("submit", compareUserAnswer);
    
        function compareUserAnswer (event: MouseEvent<HTMLButtonElement>) {
            event.preventDefault();
    
            const correctAnswer: string = rightAnswer();
            const input: string = (document.getElementById('input') as HTMLInputElement).value;
    
            if (correctAnswer === input) { 
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

    
    return (
        <div className="home">
        <Header />
        <form action="" id="question-form" onSubmit={compareUserAnswer}>
            <p className="questions"><h3><u>Question 1: What language do we use to style a page ?</u></h3></p>
            <label>Your answer:</label>
            <input type="text" id="input"/>
            <input type="submit" id="submit" value="Submit" /*onSubmit={compareUserAnswer}*/ />
        </form>
            <>
                <Link className="question" to="./question2">Go to question 2...</Link>
            </>
        </div>
    )
}
export {Question1};