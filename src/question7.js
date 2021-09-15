import React from 'react';
import './questions.css';
import Header from './src/header';
import { Link } from 'react-router-dom'
import { Question8 } from '.';

const Question7 = () => {

    (function() {
        document.getElementById('answer-form').addEventListener("submit", compareUserAnswer);
    
        function compareUserAnswer (event) {
            event.preventDefault();
    
            const correctAnswer = rightAnswer();
            const input = document.getElementById('answer').value;
    
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
        <div class="home">
        <Header />
        
            <li>
                <Link className="nameHome" to={Question8}></Link>
            </li>
        <>
        </>
        </div>
    )
}
export {Question7};