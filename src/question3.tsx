import React from 'react';
import './questions.css';
import Header from './header';
import { Link } from 'react-router-dom'

const Question3 = () => {

    (() => {
        (document.getElementById('answer-form') as HTMLInputElement).addEventListener("submit", compareUserAnswer);
    
        function compareUserAnswer (event: any) {
            event.preventDefault();
    
            const correctAnswer = rightAnswer();
            const input = (document.getElementById('answer') as HTMLInputElement).value;
    
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
        <form action="" id="question-form">
            <p>Question 3: ?</p>
            <label>Your answer:</label>
            <input type="text" id="input"/>
            <input type="submit" value="Submit"/>
        </form>
            <li>
                <Link className="question" to="./question4">Next question...</Link>
            </li>
        <>
        </>
        </div>
    )
}
export {Question3};